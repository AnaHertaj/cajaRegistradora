import { Component, Input } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  productosSeleccionados: Producto[];

  arrComida: Producto[];
  arrBebida: Producto[];

  constructor() { 
    this.productosSeleccionados = [];
        this.arrComida = [
      { nombre: 'Chococake', url_imagen: 'assets/img/choco-cake.png', precio: '5'},
      { nombre: 'Desayuno', url_imagen: 'assets/img/breakfast.png', precio: '9'},
      { nombre: 'Cerezas', url_imagen: 'assets/img/cherries.png', precio: '3'},
      { nombre: 'Dorada', url_imagen: 'assets/img/fish.png', precio: '12'},
      { nombre: 'Patatas fritas', url_imagen: 'assets/img/french-fries.png', precio: '4'},
      { nombre: 'Frutos secos', url_imagen: 'assets/img/nuts.png', precio: '4'},
      { nombre: 'Verduras', url_imagen: 'assets/img/vegetables.png', precio: '7'},
      { nombre: 'Pasta', url_imagen: 'assets/img/pasta.jpg', precio: '8'},
      { nombre: 'Olivas', url_imagen: 'assets/img/olives.png', precio: '4'},
      { nombre: 'Helado', url_imagen: 'assets/img/ice-cream.png', precio: '3'}
    ];
    this.arrBebida = [
      { nombre: 'Brandy', url_imagen: 'assets/img/brandy.png', precio: '5'},
      { nombre: 'Cocktail', url_imagen: 'assets/img/cocktail.png', precio: '5'},
      { nombre: 'Coffee', url_imagen: 'assets/img/coffee.jpg', precio: '2'},
      { nombre: 'Ice-tea', url_imagen: 'assets/img/ice-tea.jpg', precio: '3'},
      { nombre: 'Irish Coffee', url_imagen: 'assets/img/irish-coffee.png', precio: '5'},
      { nombre: 'Mojito', url_imagen: 'assets/img/mojito.png', precio: '6'},
      { nombre: 'Tea', url_imagen: 'assets/img/tea.jpg', precio: '2'},
    ];
  }

  onProductoSeleccionado($event){
     //console.log($event); 
     this.productosSeleccionados.push($event);
     console.log(this.productosSeleccionados);
   }

}
