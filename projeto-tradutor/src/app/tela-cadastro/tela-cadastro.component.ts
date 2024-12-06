import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class TelaCadastroComponent {
  currentStep: number = 0;

  nextStep() {
    if (this.currentStep < 2) {
      this.currentStep++;
    }
  }

  submitForm() {
    alert('Formulário enviado com sucesso!');
  }
}