import { Component, OnInit } from '@angular/core';
import { Foto } from 'src/app/compartidos/interfaces/foto';
import { AdministracionService } from 'src/app/compartidos/servicios/administracion.service';

@Component({
  selector: 'app-tablas-foto',
  templateUrl: './tablas-foto.component.html',
  styleUrls: ['./tablas-foto.component.css']
})
export class TablasFotoComponent implements OnInit {

  public datosFoto! : Foto [];

  constructor(private IServiceAdministracion: AdministracionService){

  }

  ngOnInit(): void {
    this.listadoFoto()
  }

  public listadoFoto():void{
    this.IServiceAdministracion.BuscarFotos().subscribe((x)=>{
      this.datosFoto = x.Informacion
      console.log(x)
    })
  }
}
