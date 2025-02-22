import { Component } from '@angular/core';
import { ProjectListComponent } from '../components/project-list/project-list.component';

@Component({
  selector: 'app-home',
  imports: [ProjectListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
