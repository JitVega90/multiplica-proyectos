import { Component } from '@angular/core';
import { Proyecto } from '../../model/proyecto';

@Component({
  selector: 'app-proyecto',
  imports: [],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {
  mangoOnline: Proyecto = {
    name: 'Mango online',
    description: 'dar soporte y mantenimiento a la web de Mango',
    state: true
  }
}
