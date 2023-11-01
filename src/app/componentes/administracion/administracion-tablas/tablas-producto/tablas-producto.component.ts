import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/compartidos/interfaces/foto';
import { AdministracionService } from 'src/app/compartidos/servicios/administracion.service';

@Component({
  selector: 'app-tablas-producto',
  templateUrl: './tablas-producto.component.html',
  styleUrls: ['./tablas-producto.component.css']
})
export class TablasProductoComponent implements OnInit{

  
  public datosProducto! : any [];

  constructor(private IServiceAdministracion: AdministracionService){

  }

  ngOnInit(): void {
    this.listadoProducto()
  }

  public listadoProducto():void{
    this.IServiceAdministracion.BuscarProductos().subscribe((x)=>{
      this.datosProducto = x.Informacion
      console.log(x.Informacion)
    })
  }
}
