import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  @Input() productos: Producto[]; // productos lo uso en el html, da igual puedo llamarle pepeto

  constructor() {}

  ngOnInit(): void {
  }

  calcularPrecioTotal(){
    //uso la variable total aqui solo en let sin this, recorro array productos e igualo total a la suma total de precios
    let total = 0;
    for (let prod of this.productos) {
      total += prod.precio;
    }
    return total;
  }

}
