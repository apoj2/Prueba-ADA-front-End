import { Component, OnInit } from '@angular/core';
import { AdministracionService } from 'src/app/compartidos/servicios/administracion.service';
import { PaginaWebProductosService } from 'src/app/compartidos/servicios/pagina-web-productos.service';

@Component({
  selector: 'app-pagina-web-productos-tienda',
  templateUrl: './pagina-web-productos-tienda.component.html',
  styleUrls: ['./pagina-web-productos-tienda.component.css']
})
export class PaginaWebProductosTiendaComponent implements OnInit{

  public datosProductos:any[]=[];
  public page!:number;
  public carrito:any[] =[]
  constructor(
    private IServicioPaginaWeb:PaginaWebProductosService
  ){

  }
  ngOnInit(): void {
      this.listadoProducto();
      if(JSON.parse(localStorage.getItem("carrito")!)==null){
        this.carrito=[]
    }
    else{
        this.carrito=JSON.parse(localStorage.getItem("carrito")!)
    }
  }

  public listadoProducto():void{
    this.IServicioPaginaWeb.BuscarFotosProductos().subscribe((x)=>{
      console.log(x)
      this.datosProductos = x.Informacion
    })
  }
  public tomarIdCarrito(nombre:string){
    this.IServicioPaginaWeb.BuscarProductoPorNombre(nombre).subscribe((x)=>{
        this.carrito.push(x.Informacion)
        let cantidad = this.carrito.length
        console.log(cantidad)
        localStorage.setItem("cantidadcarrito",cantidad.toString())
        localStorage.setItem("carrito",JSON.stringify(this.carrito))
        window.location.href='tienda/productos'
    })
    //enviocarrito
  }
  public tomarNombreProducto(event:any){
    console.log(event)
    localStorage.setItem('ID-P',event.toString());
    window.location.href='/tienda/productos/'+event
  }
}
