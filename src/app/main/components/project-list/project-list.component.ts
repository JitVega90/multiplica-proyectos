import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../services/types/project.service';
import { Project } from '../../../services/types/project';
import { ProjectStore } from '../../../store/projects.store';


@Component({
  selector: 'app-project-list',
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  readonly store = inject(ProjectStore);

  projects: Project[] = [];
  constructor(public service: ProjectService){}

  ngOnInit(): void{
    this.getProjects();
    this.store.loadPages(1);
    console.log("accediendo: ", this.store.projects())
  }
  private getProjects(): void{

  }
}
