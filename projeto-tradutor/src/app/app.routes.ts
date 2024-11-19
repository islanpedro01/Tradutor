import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

export const routes: Routes = [
    {
    path:'',
    component: HomeComponent
    },
        
    {      
    path: 'login',
    component: TelaLoginComponent
    },

    {
    path:'cadastro',
    component: TelaCadastroComponent

    }
];
