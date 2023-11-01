import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-web-productos-encabezado',
  templateUrl: './pagina-web-productos-encabezado.component.html',
  styleUrls: ['./pagina-web-productos-encabezado.component.css']
})
export class PaginaWebProductosEncabezadoComponent implements OnInit{
  
  public valor_admin:any = localStorage.getItem('idrolusuario')?.toString()
  public cantidadCarrito:any = localStorage.getItem("cantidadcarrito")?.toString()

  constructor(){

  }

  ngOnInit(): void {
      console.log(this.valor_admin)
      console.log(JSON.parse(localStorage.getItem("carrito")!))
  }
  

  public cerrarSesion():void{
    localStorage.setItem('idrolusuario','')
    window.location.href=''
  }
}
