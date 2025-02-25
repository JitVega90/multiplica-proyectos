import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from '../mock-projects';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = PROJECTS;

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }
  addProject(project: Project): void {
    const newProject = {...project};
    PROJECTS.push(newProject);
  }
  ifExists(project: Project): boolean {
    const index = this.projects.findIndex(p => p.name.toLowerCase() === project.name.toLowerCase());
    if(index !==-1){
      return false;
    }else {
      this.addProject(project);
      return true;
    }
  }
  updateProject(project: Project){
    const findIndex = this.projects.findIndex(p => p.name.toLowerCase() === project.name.toLowerCase());
    if (findIndex !== -1) {
      this.projects[findIndex] = { ...this.projects[findIndex], ...project };
    }
  }
}
