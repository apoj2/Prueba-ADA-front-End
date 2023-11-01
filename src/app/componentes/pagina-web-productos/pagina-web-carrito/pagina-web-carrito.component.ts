import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-web-carrito',
  templateUrl: './pagina-web-carrito.component.html',
  styleUrls: ['./pagina-web-carrito.component.css']
})
export class PaginaWebCarritoComponent implements OnInit {

  public datosCarrito:any[] =[]
  public page!:number;
  public total : any;
  constructor(){

  }

  ngOnInit(): void {
    this.eliminarDeCarrito('Volkswagen')
    if(JSON.parse(localStorage.getItem("carrito")!)==null){
      this.datosCarrito=[]
  }
  else{
      this.datosCarrito=JSON.parse(localStorage.getItem("carrito")!)
     
  }


 
  console.log(this.datosCarrito);
  }

  public eliminarDeCarrito(nombre:any){
    console.log(nombre)
    this.datosCarrito.find((item, index ) => {
      let nombrec = item.producto_nombre
      if (nombrec == nombre)
      this.datosCarrito.pop()
      let cantidad = this.datosCarrito.length
      console.log(cantidad)
      localStorage.setItem("cantidadcarrito",cantidad.toString())
      localStorage.setItem("carrito",JSON.stringify(this.datosCarrito))
      // window.location.href='tienda/carrito'
      console.log(this.datosCarrito.pop())
        return index
    })
  }

  public calcularTotal(precio:any){
    console.log(precio)
    this.total = this.total + precio
    console.log(this.total)
  }


}
