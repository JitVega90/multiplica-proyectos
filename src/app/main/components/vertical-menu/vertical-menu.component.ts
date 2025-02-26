import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vertical-menu',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './vertical-menu.component.html',
  styleUrl: './vertical-menu.component.css'
})
export class VerticalMenuComponent {
  optionMenu1: string = 'Lista';
  optionMenu2: string = 'Formulario';
  constructor(private route: ActivatedRoute) {}
}
