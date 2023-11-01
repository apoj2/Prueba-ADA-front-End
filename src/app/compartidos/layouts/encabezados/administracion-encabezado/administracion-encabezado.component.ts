import { Component } from '@angular/core';

@Component({
  selector: 'app-administracion-encabezado',
  templateUrl: './administracion-encabezado.component.html',
  styleUrls: ['./administracion-encabezado.component.css']
})
export class AdministracionEncabezadoComponent {

  public cerrarSesion():void{
    localStorage.setItem('idrolusuario','')
    window.location.href=''
  }
}
