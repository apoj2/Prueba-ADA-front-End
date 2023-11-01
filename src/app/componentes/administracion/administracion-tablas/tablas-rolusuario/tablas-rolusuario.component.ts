import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/compartidos/interfaces/foto';
import { AdministracionService } from 'src/app/compartidos/servicios/administracion.service';

@Component({
  selector: 'app-tablas-rolusuario',
  templateUrl: './tablas-rolusuario.component.html',
  styleUrls: ['./tablas-rolusuario.component.css']
})
export class TablasRolusuarioComponent implements OnInit{

  public datosRolUsuario! : any [];

  constructor(private IServiceAdministracion: AdministracionService){

  }

  ngOnInit(): void {
    this.listadoRolUsuario()
  }

  public listadoRolUsuario():void{
    this.IServiceAdministracion.BuscarRolesUsuario().subscribe((x)=>{
      this.datosRolUsuario= x.Informacion
      console.log(x.Informacion)
    })
  }
}
