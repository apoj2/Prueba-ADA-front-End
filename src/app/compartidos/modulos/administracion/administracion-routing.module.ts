import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionHomeComponent } from 'src/app/componentes/administracion/administracion-home/administracion-home.component';
import { AdministracionFotoComponent } from 'src/app/componentes/administracion/administracion-foto/administracion-foto.component';
import { AdministracionProductoComponent } from 'src/app/componentes/administracion/administracion-producto/administracion-producto.component';
import { AdministracionUsuarioComponent } from 'src/app/componentes/administracion/administracion-usuario/administracion-usuario.component';
import { AdministracionRolusuarioComponent } from 'src/app/componentes/administracion/administracion-rolusuario/administracion-rolusuario.component';

const routes : Routes = [
  {path:'',component: AdministracionHomeComponent,pathMatch:"full"},
  {path:'adminfoto',component: AdministracionFotoComponent},
  {path:'adminproducto',component: AdministracionProductoComponent},
  {path:'adminusuario',component: AdministracionUsuarioComponent},
  {path:'adminrolusuario',component: AdministracionRolusuarioComponent},
  {path:'**',redirectTo:'administracion'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
