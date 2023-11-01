import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { AdministracionService } from 'src/app/compartidos/servicios/administracion.service';
@Component({
  selector: 'app-formulario-rolusuario',
  templateUrl: './formulario-rolusuario.component.html',
  styleUrls: ['./formulario-rolusuario.component.css']
})
export class FormularioRolusuarioComponent implements OnInit {
  formulario!:FormGroup;

  controlDeZona:boolean=true;

  datosZonas:any[]=[];

  constructor(
    public fabricaDiccionario:FormBuilder,
    private IServicioAdministracion: AdministracionService
    ){ }

  ngOnInit(): void {

    this.formulario=this.inicializarFormulario()
    // this.servicioZonas.consultarZonas()
    // .subscribe(respuesta=>{
      
    //   this.datosZonas=respuesta.map((zona:any)=>{
    //     return {nombre:zona.nombre,id:zona.id}
    //   })

    // })
    // console.log(this.datosZonas)

  }

  public analizarFormulario():void{

    let datosMercancia=this.formulario.value

    // datosMercancia.zona={id:this.formulario.value.zona}
    
    datosMercancia.descripcion=this.formulario.value.descripcion
    datosMercancia.estado=this.formulario.value.estado
    datosMercancia.fecha_activacion=this.formulario.value.fecha_activacion
    datosMercancia.fecha_modificacion=this.formulario.value.fecha_modificacion
    datosMercancia.fecha_inactivacion=this.formulario.value.fecha_inactivacion
    datosMercancia.usuario=this.formulario.value.usuario
    // this.servicioMercancias.ingresarMercancia(datosMercancia)
    // .subscribe(respuesta=>{
    //   console.log(respuesta)
    //   window.location.reload()
    
    // })
    
    this.IServicioAdministracion.InsertarRolUsuario(datosMercancia).subscribe((x)=>{
      console.log(x)
     window.location.reload()
    })
   
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      descripcion:['Usuario',[Validators.required]],
      estado:['A',[Validators.required]],
      fecha_activacion:['2023-10-30',[Validators.required]],
      fecha_modificacion:['2023-10-30',[Validators.required]],
      fecha_inactivacion:['2023-10-30',[Validators.required]],
      usuario:['atperez',[Validators.required]]
    })
  }
}
