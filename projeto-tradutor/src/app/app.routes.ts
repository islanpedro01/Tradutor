import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path:'',
    redirectTo: 'HomeComponent'},
    
    {      
    path: 'login',
    redirectTo: 'TelaLoginComponent'
    }
];
