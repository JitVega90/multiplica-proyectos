import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../services/types/project.service';
import { Project } from '../../../services/types/project';
import { ProjectStore } from '../../../store/projects.store';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  readonly store = inject(ProjectStore);
  projects: Project[] = [];
  constructor(public service: ProjectService, private router: Router){};
  searchValue: string = "";

  ngOnInit(): void{
    this.store.loadPages(1);
  }
  editProject(proyecto: Project) {
    console.log('Editando proyecto:', proyecto);
    this.store.setProjectToEdit(proyecto);
    this.service.addProject(proyecto);
    //this.store.loadPages(1);
    this.router.navigate(['/formulario']);
  }
  findProjec() {
    this.store.setFilterQuery(this.searchValue);
  }
}
