import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  producto!: ProductoDescripcion;
  id!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(parametros => {
        this.productosService.getProducto(parametros['id'])
          .subscribe((data: any) => {
            this.id = parametros['id'];
            this.producto = data;
          });
      });
  }

}
