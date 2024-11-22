import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TextoTraducaoComponent } from './home/texto-traducao/texto-traducao.component';
import { UrlTraducaoComponent } from './home/url-traducao/url-traducao.component';
import { CsvTraducaoComponent } from './home/csv-traducao/csv-traducao.component';

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

    },
    {
    path:'sobrenos',
    component: SobreNosComponent
    },
    {
    path:'textotraducao',
    component:TextoTraducaoComponent,
    },
    {
    path:'urltraducao',
    component:UrlTraducaoComponent
    },
    {
    path:'csvtraducao',
    component:CsvTraducaoComponent
    }
    
];
