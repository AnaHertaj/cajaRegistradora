import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Producto } from '../models/producto.model';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {
  @Input() titulo: string;
  @Input() productos: Producto[]; // productos lo uso en el html, da igual puedo llamarle pepeto

 // nuevoProducto: Producto; // no estoy creando ningun producto nuevo !!!!

  @Output() productoSeleccionado: EventEmitter<Producto>;

  constructor() { 
    this.productoSeleccionado = new EventEmitter();
    //this.titulo = ''; //no hace falta
  }

  ngOnInit(): void {
  }

  pillarProducto(pProducto){
    console.log(pProducto);
    this.productoSeleccionado.emit(pProducto);   
  } 

}
