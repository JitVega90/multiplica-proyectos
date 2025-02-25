import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vertical-menu',
  imports: [RouterModule],
  templateUrl: './vertical-menu.component.html',
  styleUrl: './vertical-menu.component.css'
})
export class VerticalMenuComponent {
  optionMenu1: string = 'Lista';
  optionMenu2: string = 'Formulario';

}
