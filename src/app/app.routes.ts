import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ProjectFormComponent } from './main/components/project-form/project-form.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'formulario',
        component: ProjectFormComponent
    },
    {
        path: '',
        redirectTo:'/home',
        pathMatch: 'full'
    },
];
