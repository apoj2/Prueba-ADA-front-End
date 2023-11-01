import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/compartidos/interfaces/foto';
import { AdministracionService } from 'src/app/compartidos/servicios/administracion.service';

@Component({
  selector: 'app-tablas-usuario',
  templateUrl: './tablas-usuario.component.html',
  styleUrls: ['./tablas-usuario.component.css']
})
export class TablasUsuarioComponent implements OnInit {

  public datosUsuario! : any [];

  constructor(private IServiceAdministracion: AdministracionService){

  }

  ngOnInit(): void {
    this.listadoUsuario()
  }

  public listadoUsuario():void{
    this.IServiceAdministracion.BuscarUsuarios().subscribe((x)=>{
      this.datosUsuario = x.Informacion
      console.log(x.Informacion)
    })
  }
}
