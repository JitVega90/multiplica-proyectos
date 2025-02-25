import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../services/types/project.service';
import { Project } from '../../../services/types/project';
import { ProjectStore } from '../../../store/projects.store';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-project-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  readonly store = inject(ProjectStore);
  projects: Project[] = [];
  constructor(public service: ProjectService, private router: Router){};

  ngOnInit(): void{
    this.store.loadPages(1);
    /*console.log("accediendo: ", this.store.projects())
    console.log("count: ", this.store.projectsCount())
    console.log("projectList: ", this.store.projectsList())*/
  }
  editProject(proyecto: Project) {
    console.log('Editando proyecto:', proyecto);
    this.store.setProjectToEdit(proyecto);
    this.router.navigate(['/formulario']);
    // Aquí puedes abrir un modal, redirigir a otra página o modificar el estado
  }}
