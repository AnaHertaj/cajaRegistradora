import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  @Input() productos: Producto[]; // productos lo uso en el html, da igual pueod llamarle pepeto

  total: any;

  constructor() {
    
    this.total = "valor total"

   }

  ngOnInit(): void {
  }

}
