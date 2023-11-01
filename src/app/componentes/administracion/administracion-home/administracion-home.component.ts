import { Component, OnInit } from '@angular/core';
import { AdministracionService } from 'src/app/compartidos/servicios/administracion.service';
import { Foto } from 'src/app/compartidos/interfaces/foto';

@Component({
  selector: 'app-administracion-home',
  templateUrl: './administracion-home.component.html',
  styleUrls: ['./administracion-home.component.css']
})
export class AdministracionHomeComponent implements OnInit {


  constructor(private IServiceAdministracion: AdministracionService ){
    
  }

  ngOnInit(): void {
    this.IServiceAdministracion.OkFoto().subscribe(x => {
      console.log(x)
    })

   
    this.IServiceAdministracion.BuscarFotoId(1).subscribe((x)=>{
      console.log(x)
    })
    
  }


}
