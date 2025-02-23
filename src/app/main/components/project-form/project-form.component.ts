import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Project } from '../../../services/types/project';


@Component({
  selector: 'app-project-form',
  imports: [HeaderComponent],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent implements OnInit{
  @Input() project: Project | null = null;
  projectForm! : FormGroup;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: [this.project?.name || ''],
      description: [this.project?.description || ''],
      status: [this.project?.status || false]
    })
  }

}
