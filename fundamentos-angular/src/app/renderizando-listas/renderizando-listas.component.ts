import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: "Samsung", descricao: "Smartphone Samsung", esgotado: false},
    { id: 2, nome: "LG", descricao: "Smartphone LG", esgotado: true},
    { id: 3, nome: "Nokia", esgotado: false},
    { id: 4, nome: "iPhone", descricao: "iPhone 8", esgotado: true},
  ]
}
