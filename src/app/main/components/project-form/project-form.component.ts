import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validator, ReactiveFormsModule, Validators  } from '@angular/forms';
import { Project } from '../../../services/types/project';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../services/types/project.service';

@Component({
  selector: 'app-project-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent implements OnInit{
  @Input() project: Project | null = null;
  ifProject: boolean = false;
  projectForm! : FormGroup;

  constructor(private fb: FormBuilder, private service: ProjectService) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: [this.project?.name || '', Validators.required],
      description: [this.project?.description || ''],
      status: [this.project?.status || '', Validators.required]
    })
  }
  onSubmit(){
    if(this.projectForm.valid){
      const exists = this.service.ifExists(this.projectForm.value);
      if(exists){
        this.ifProject = false;
      }else {
        this.ifProject = true;
      }

    }
  }
}
