import { Component } from '@angular/core';
import { PaginaWebProductosService } from 'src/app/compartidos/servicios/pagina-web-productos.service';

@Component({
  selector: 'app-pagina-producto',
  templateUrl: './pagina-producto.component.html',
  styleUrls: ['./pagina-producto.component.css']
})
export class PaginaProductoComponent {
  public nombreProducto:any;
  public productoObjeto: any;

  constructor(
    private IProductoFotoService:PaginaWebProductosService
  ) 
  { 
    
  }

  ngOnInit(): void {
    this.nombreProducto = localStorage.getItem('ID-P')?.toString();
    console.log(typeof(this.nombreProducto))
    console.log(this.nombreProducto)
    this.detalleProducto(this.nombreProducto);
  }

  public detalleProducto(nombre:string): void {
    console.log(nombre)
    this.IProductoFotoService.BuscarProductoPorNombre(nombre).subscribe(producto=>{
      console.log(producto);
      this.productoObjeto= producto.Informacion;
    })
  }
}
