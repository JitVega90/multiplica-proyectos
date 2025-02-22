import { Component } from '@angular/core';
import { ProyectoComponent } from '../components/proyecto/proyecto.component';

@Component({
  selector: 'app-home',
  imports: [ProyectoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
