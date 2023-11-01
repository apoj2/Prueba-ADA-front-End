import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AdministracionService } from 'src/app/compartidos/servicios/administracion.service';
import { LoginService } from 'src/app/compartidos/servicios/login.service';
@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit{

  formulario!:FormGroup;

  controlDeZona:boolean=true;

  datosZonas:any[]=[];

  constructor(
    public fabricaDiccionario:FormBuilder,
    private IServicioLogin: LoginService ,
    private router:Router
    ){ }

  ngOnInit(): void {
    
    this.formulario=this.inicializarFormulario()
  }

  public analizarFormulario():void{

    let datosMercancia=this.formulario.value


    datosMercancia.apodo=this.formulario.value.apodo
    datosMercancia.contrasena=this.formulario.value.contrasena

    this.IServicioLogin.Login(datosMercancia).subscribe((x)=>{
      console.log( x.Informacion)
      //window.location.reload()
      localStorage.setItem('token',x.Informacion.token)
      localStorage.setItem('idrolusuario',x.Informacion.idrolusuario)
      window.location.href='tienda'
    })
   
  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      apodo:['atperez',[Validators.required]],
      contrasena:['soyangel',[Validators.required]],
    })
  }
}
