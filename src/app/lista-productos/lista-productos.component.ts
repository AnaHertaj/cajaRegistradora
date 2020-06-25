import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Producto } from '../models/producto.model';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[]; // productos lo uso en el html, da igual pueod llamarle pepeto

  //productos: Producto[]; 

  nuevoProducto: Producto;

  @Output() productoSeleccionado: EventEmitter<Producto>;

  @Input() titulo: string;

  @Input() arrComida: Producto;
  @Input() arrBebida: Producto;
  
  constructor() { 
    this.nuevoProducto = new Producto('','','');
    this.productoSeleccionado = new EventEmitter();
    this.titulo = '';
  }

  ngOnInit(): void {
  }

  pillarProducto(pNombre,pUrl_imagen,pPrecio){
    this.nuevoProducto.nombre=pNombre;
    this.nuevoProducto.url_imagen=pUrl_imagen;
    this.nuevoProducto.precio=pPrecio;
    console.log(this.nuevoProducto);
    this.productoSeleccionado.emit(this.nuevoProducto); 
    this.nuevoProducto = new Producto('','','');   
  } 

}
