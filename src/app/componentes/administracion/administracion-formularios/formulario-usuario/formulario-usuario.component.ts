import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { AdministracionService } from 'src/app/compartidos/servicios/administracion.service';
@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {
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

    datosMercancia.estado=this.formulario.value.estado
    datosMercancia.fecha_activacion=this.formulario.value.fecha_activacion 
    datosMercancia.fecha_modificacion=this.formulario.value.fecha_modificacion
    datosMercancia.fecha_inactivacion=this.formulario.value.fecha_inactivacion
    datosMercancia.usuario=this.formulario.value.usuario
    datosMercancia.apodo=this.formulario.value.apodo
    datosMercancia.nombre_completo=this.formulario.value.nombre_completo
    datosMercancia.correo_electronico=this.formulario.value.correo_electronico
    datosMercancia.direccion=this.formulario.value.direccion
    datosMercancia.telefono =this.formulario.value.telefono
    datosMercancia.celular=this.formulario.value.celular
    datosMercancia.contrasena=this.formulario.value.contrasena
    datosMercancia.idrolusuario=this.formulario.value.idrolusuario

    // this.servicioMercancias.ingresarMercancia(datosMercancia)
    // .subscribe(respuesta=>{
    //   console.log(respuesta)
    //   window.location.reload()
    
    // })
    this.IServicioAdministracion.InsertarUsuario(datosMercancia).subscribe((x)=>{
      console.log(x)
      window.location.reload()
    })
    
   
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      estado:['A',[Validators.required]],
      fecha_activacion:['2023-10-30',[Validators.required]],
      fecha_modificacion:['2023-10-30',[Validators.required]],
      fecha_inactivacion:['2023-10-30',[Validators.required]],
      usuario:['es',[Validators.required]],
      apodo:['es',[Validators.required]],
      nombre_completo:['es',[Validators.required]],
      correo_electronico:['angeltobonperez5@gmail.com',[Validators.required]],
      direccion:['crr90c#76db',[Validators.required]],
      telefono:['2349882',[Validators.required]],
      celular:['3206194036',[Validators.required]],
      contrasena:['angel',[Validators.required]],
      idrolusuario:[1,[Validators.required]]
    })
  }
}
