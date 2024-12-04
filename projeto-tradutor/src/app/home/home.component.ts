import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CsvTraducaoComponent } from './csv-traducao/csv-traducao.component';
import { TextoTraducaoComponent } from './texto-traducao/texto-traducao.component';
import { UrlTraducaoComponent } from './url-traducao/url-traducao.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule,TextoTraducaoComponent,UrlTraducaoComponent,CsvTraducaoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  csvToogle = false;
  textoToogle = true;
  urlToogle = false;

  constructor(private router: Router) {

  }
  csv(){
    this.csvToogle = true;
    this.textoToogle = false;
    this.urlToogle = false;
  }
  texto(){
    this.csvToogle = false;
    this.textoToogle = true;
    this.urlToogle = false;
  }
  url(){
    this.csvToogle = false;
    this.textoToogle = false;
    this.urlToogle = true;
  }
}
