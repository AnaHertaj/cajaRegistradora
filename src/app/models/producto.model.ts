export class Producto {

    //propiedades del modelo/clase
    nombre: string;
    url_imagen: string;
    precio: any;

    constructor(pNombre: string, pUrl_imagen: string, pPrecio: any){
        this.nombre = pNombre;
        this.url_imagen = pUrl_imagen;
        this.precio = pPrecio; 
    }
    
}