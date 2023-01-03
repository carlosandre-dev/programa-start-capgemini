import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-personalizado',
  templateUrl: './componente-personalizado.component.html',
  styleUrls: ['./componente-personalizado.component.css']
})
export class ComponentePersonalizadoComponent {
  @Input() nome = "Carlos André"
  @Input() sobrenome = "Santos de Jesus";
}
