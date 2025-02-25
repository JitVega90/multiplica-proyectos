import { Component, inject, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validator, ReactiveFormsModule, Validators  } from '@angular/forms';
import { Project } from '../../../services/types/project';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../services/types/project.service';
import { ProjectStore } from '../../../store/projects.store';


@Component({
  selector: 'app-project-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent implements OnInit{
  project: Project | null = null;
  ifProject: boolean = false;
  projectForm! : FormGroup;
  readonly store = inject(ProjectStore);

  constructor(private fb: FormBuilder, private service: ProjectService) {}

  ngOnInit(): void {
    this.project = this.store.projectToEdit?.();

    this.projectForm = this.fb.group({
      name: [this.project?.name || '', Validators.required],
      description: [this.project?.description || ''],
      status: [this.project?.status || '', Validators.required]
    })
    if(this.project !== null){
      this.ifProject = true;
    }
  }
  onSubmit(){
    /*if(this.projectForm.valid){
      this.store.addProject(this.projectForm.value)
    }*/
    if(this.projectForm.valid){
      const exists = this.service.ifExists(this.projectForm.value);
      if(exists){
        this.ifProject = false;
      }else {
        this.ifProject = true;
        this.service.updateProject(this.projectForm.value);
      }

    }
  }
}
