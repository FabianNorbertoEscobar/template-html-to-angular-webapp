import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  cargando = true;

  constructor(
    private http: HttpClient
  ) {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.http.get("https://portafolio-hmtl-to-angular-default-rtdb.firebaseio.com/productos_idx.json")
      .subscribe((data: any) => {
        this.productos = data;
        this.cargando = false;
      });
  }

}
