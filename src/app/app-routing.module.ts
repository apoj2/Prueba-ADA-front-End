import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministracionLayoutComponent } from './compartidos/layouts/administracion-layout/administracion-layout.component';
import { PaginaWebProductosLayoutComponent } from './compartidos/layouts/pagina-web-productos-layout/pagina-web-productos-layout.component';
import { LoginLayoutComponent } from './compartidos/layouts/login-layout/login-layout.component';
import { loginGuard } from './compartidos/guards/login.guard';
import { accesoGuard } from './compartidos/guards/acceso.guard';
import { administradorGuard } from './compartidos/guards/administrador.guard';
import { ErrorComponent } from './compartidos/layouts/error/error.component';

const routes: Routes = [
  {path:'',component:LoginLayoutComponent,pathMatch:'full',canActivate:[loginGuard],children:[
    {path:'',loadChildren:()=> import('./compartidos/modulos/login/login.module').then((x)=>x.LoginModule)}
  ]},
  {path:'tienda',component:PaginaWebProductosLayoutComponent,canActivate:[accesoGuard],children:[
    {path:'',loadChildren:()=> import('./compartidos/modulos/pagina-web-productos/pagina-web-productos.module').then((x)=>x.PaginaWebProductosModule)},
   
  ]},
  {path:'administracion',component:AdministracionLayoutComponent,canActivate:[accesoGuard,administradorGuard],children:[
    {path:'',loadChildren:()=> import('./compartidos/modulos/administracion/administracion.module').then((x)=>x.AdministracionModule)},
    
  ]},
  {
    path:'error',component:ErrorComponent
  },
  {
    path:'**',redirectTo:'error'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
