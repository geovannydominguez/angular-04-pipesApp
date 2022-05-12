import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'geovanny';
  nombreUpper: string = 'GEOVANNY';
  nombreCompleto: string = 'geovannY Dominguez';

  fecha: Date = new Date();
}
