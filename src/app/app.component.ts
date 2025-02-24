import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './main/components/header/header.component';
import { VerticalMenuComponent } from './main/components/vertical-menu/vertical-menu.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,VerticalMenuComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multiplica-proyectos';
}
