import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validator, ReactiveFormsModule  } from '@angular/forms';
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
  projectForm! : FormGroup;

  constructor(private fb: FormBuilder, private service: ProjectService) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: [this.project?.name || ''],
      description: [this.project?.description || ''],
      status: [this.project?.status || false]
    })
  }
  onSubmit(){
    if(this.projectForm.valid){
      console.log(this.projectForm.value)
      this.service.addProject(this.projectForm.value);
      console.log(this.service.getProjects())
    }
  }
}
