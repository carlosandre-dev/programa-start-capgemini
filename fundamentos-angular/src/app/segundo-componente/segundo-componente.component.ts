import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Proway";
  anoFundacao = "1995";
  urlImagem = "/assets/logo_proway.png";

  mostrarAnoFundacao() {
    alert(`A empresa Proway foi fundada em: ${this.anoFundacao}`)
  }

}
