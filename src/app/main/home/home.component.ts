import { Component } from '@angular/core';
import { ProjectListComponent } from '../components/project-list/project-list.component';
import { HeaderComponent } from '../components/header/header.component';


@Component({
  selector: 'app-home',
  imports: [ProjectListComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
