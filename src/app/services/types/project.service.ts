import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from '../mock-projects';
import { of, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = PROJECTS;
  private projectSubject = new BehaviorSubject<Project[]>(PROJECTS);
  projects$ = this.projectSubject.asObservable();

  getProjects(): Observable<Project[]> {
    return this.projects$;
  }
  addProject(project: Project): void {
    const newProject = {...project};
    const updateProject = [...this.projectSubject.value, newProject];
    this.projectSubject.next(updateProject);
    console.log("Array: ", )
  }
  ifExists(project: Project): boolean {
    const exists = this.projects.findIndex(p => p.name.toLowerCase() === project.name.toLowerCase());
    if(exists !==-1){
      return false;
    }else {
      this.addProject(project);
      return true;
    }
  }
  updateProject(newProject: Project){
    const updatedProjects = this.projectSubject.value.map(project => project.name.toLocaleLowerCase() === newProject.name.toLocaleLowerCase() ? {...project, ...newProject} : project );
    this.projectSubject.next(updatedProjects);
  }
}
