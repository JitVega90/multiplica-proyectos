import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { ProjectService } from '../services/types/project.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

export interface Project {
    name: string,
    description: string,
    status: 'Activo' | 'Inactivo'
}

interface ProjectState {
    projects: Project[];
    state: 'Loading' | 'Loaded' | 'error',
    filter: { query: string; name: string }
}

const initialState: ProjectState = {
    projects: [],
    state: 'Loading',
    filter: {query: '', name: ''}
}

export const ProjectStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withState({ projectToEdit: null as Project | null }),
    withComputed(({projects,filter}) => ({
        projectsList: computed(() => projects().filter(p => p.name.toLocaleLowerCase().includes(filter().query.toLocaleLowerCase()))),
        projectsCount: computed(() => projects().length)
    })),
    withMethods((store, projectService = inject(ProjectService)) => ({
        loadPages: rxMethod(
            pipe(
                tap(() => patchState(store, {state: 'Loading'})),
                switchMap(() => projectService.projects$),
                tap((projects: Project[]) => {
                    //console.log('Proyectos recibidos:', projects);
                    patchState(store, { projects, state: 'Loaded' });
                })
            )
        ),
        addProject: (newProject: Project) => {
            console.log('Proyecto añadido:', newProject);
            patchState(store, { projects: [...store.projects(), newProject] });
        },
        setProjectToEdit: (project: Project) => {
            patchState(store, { projectToEdit: project });
        },
        setFilterQuery: (query: string) => {
            patchState(store, { filter: { ...store.filter(), query } });
            //console.log('query: ',query, 'array: ', store.projectsList());
        }
    }))
)