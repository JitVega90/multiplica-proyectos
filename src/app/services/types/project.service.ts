import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from '../mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project [] = []
  constructor() { }
  getProjects(): Project[]{
    this.projects = PROJECTS
    return this.projects;
  }
  addProject(project: Project): void {
    const newProject = {...project};
    PROJECTS.push(newProject);
  }
  updateProject(){}
}
