import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectService } from '../../../services/types/project.service';
import { Project } from '../../../services/types/project';


@Component({
  selector: 'app-project-list',
  imports: [CommonModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects: Project[] = [];
  constructor(private service: ProjectService){}
  ngOnInit(): void{
    this.getProjects();
  }
  private getProjects(): void{
    this.projects =  this.service.getProjects()
  }
}
