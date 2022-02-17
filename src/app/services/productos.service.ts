import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];
  cargando = true;

  constructor(
    private http: HttpClient
  ) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise<void>((resolve) => {
      this.http.get('https://portafolio-hmtl-to-angular-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((data: any) => {
          this.productos = data;
          this.cargando = false;
          resolve();
        });
    });

  }

  getProducto(id: string) {
    return this.http.get(`https://portafolio-hmtl-to-angular-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {
    if (this.productos.length == 0) {
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    } else {
      this.filtrarProductos(termino);
    }
  };

  filtrarProductos(termino: string) {
    this.productosFiltrado = [];
    this.productosFiltrado = this.productos.filter(p => p.categoria.toLowerCase().includes(termino.toLowerCase())
      || p.titulo.toLowerCase().includes(termino.toLowerCase()));
  }

}
