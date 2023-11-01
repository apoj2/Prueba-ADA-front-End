import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaWebProductosHomeComponent } from 'src/app/componentes/pagina-web-productos/pagina-web-productos-home/pagina-web-productos-home.component';
import { PaginaWebProductosTiendaComponent } from 'src/app/componentes/pagina-web-productos/pagina-web-productos-tienda/pagina-web-productos-tienda.component';
import { PaginaWebCarritoComponent } from 'src/app/componentes/pagina-web-productos/pagina-web-carrito/pagina-web-carrito.component';
import { PaginaProductoComponent } from 'src/app/componentes/pagina-web-productos/pagina-producto/pagina-producto.component';



const routes : Routes = [
  {path:'',component: PaginaWebProductosHomeComponent,pathMatch:"full"},
  {path:'productos',component:PaginaWebProductosTiendaComponent},
  {path:'carrito',component:PaginaWebCarritoComponent},
  {path:'productos/:nombre',component:PaginaProductoComponent},
  {path:'**',redirectTo:'tienda'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaWebProductosRoutingModule { }
