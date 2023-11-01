import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginHomeComponent } from 'src/app/componentes/login/login-home/login-home.component';
import { CrearUsuarioComponent } from 'src/app/componentes/login/crear-usuario/crear-usuario.component';

const routes : Routes = [
  {path:'',component: LoginHomeComponent,pathMatch:"full"},
  {path:'crearusuario',component:CrearUsuarioComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
