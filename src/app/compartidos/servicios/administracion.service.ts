import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Foto } from '../interfaces/foto';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {

public header! : HttpHeaders ;
public parametroToken!:string;
public token!:any

  constructor(private peticion:HttpClient) { 
    this.header = new HttpHeaders();
    this.parametroToken = 'TokenAcceso';
    this.token = localStorage.getItem('token')?.toString()
  }
  public InsertarProducto(producto: any):Observable<any>
  {
    let uri=`https://localhost:44331/api/producto`

    return this.peticion.post(uri,producto,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public ActualizarProducto(id:number,producto: any):Observable<any>
  {
    let uri=`https://localhost:44331/api/producto/${id}` 
    return this.peticion.put(uri,producto,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public EliminarProducto(id:number):Observable<any>
  {
    let uri=`https://localhost:44331/api/producto/${id}` 
    return this.peticion.delete(uri,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public BuscarProductos():Observable<any>
  {
    let uri=`https://localhost:44331/api/productolistado` 
    return this.peticion.post(uri,null,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public BuscarProductoId(id:number):Observable<any>
  {
    let uri=`https://localhost:44331/api/productoporid/${id}` 
    return this.peticion.post(uri,null,{headers:this.header.append(this.parametroToken,this.token)})
  }
//////
  public InsertarRolUsuario(rolusuario :any):Observable<any>
  {
    let uri=`https://localhost:44331/api/rolusuario` 
    return this.peticion.post(uri,rolusuario,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public ActualizarRolUsuario(id:number,rolusuario :any):Observable<any>
  {
    let uri=`https://localhost:44331/api/rolusuario/${id}` 
    return this.peticion.put(uri,rolusuario,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public EliminarRolUsuario(id:number):Observable<any>
  {
    let uri=`https://localhost:44331/api/rolusuario/${id}` 
    return this.peticion.delete(uri,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public BuscarRolesUsuario():Observable<any>
  {
    let uri=`https://localhost:44331/api/rolusuariolistado` 
    return this.peticion.post(uri,null,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public BuscarRolUsuarioId(id:number):Observable<any>
  {
    let uri=`https://localhost:44331/api/rolusuarioporid/${id}` 
    return this.peticion.post(uri,null,{headers:this.header.append(this.parametroToken,this.token)})
  }
  ////
  public InsertarUsuario(usuario :any):Observable<any>
  {
    let uri=`https://localhost:44331/api/usuario` 
    return this.peticion.post(uri,usuario,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public ActualizarUsuario(id:number, usuario :any):Observable<any>
  {
    let uri=`https://localhost:44331/api/usuario/${id}` 
    return this.peticion.put(uri,usuario,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public EliminarUsuario(id:number):Observable<any>
  {
    let uri=`https://localhost:44331/api/usuario/${id}` 
    return this.peticion.delete(uri,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public BuscarUsuarios():Observable<any>
  {
    let uri=`https://localhost:44331/api/usuariolistado` 
    return this.peticion.post(uri,null,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public BuscarUsuarioId(id:number):Observable<any>
  {
    let uri=`https://localhost:44331/api/usuarioporid/${id}` 
    return this.peticion.post(uri,null,{headers:this.header.append(this.parametroToken,this.token)})
  }
  ///////
  public OkFoto():Observable<any>{
    let uri=`https://localhost:44331/api/foto` 
    return this.peticion.get(uri)
  }

  public InsertarFoto(foto: Foto):Observable<any>
  {
    let uri=`https://localhost:44331/api/foto` 
    return this.peticion.post(uri,foto,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public ActualizarFoto(id:number,foto: any):Observable<any>
  {
    let uri=`https://localhost:44331/api/foto/${id}` 
    return this.peticion.put(uri,foto,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public EliminarFoto(id:number):Observable<any>
  {
    let uri=`https://localhost:44331/api/foto/${id}` 
    return this.peticion.delete(uri,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public BuscarFotos():Observable<any>
  {
    let uri=`https://localhost:44331/api/fotolistado` 
    return this.peticion.post(uri,null,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public BuscarFotoId(id:number):Observable<any>
  {
    let uri=`https://localhost:44331/api/fotoporid/${id}` 
    return this.peticion.post(uri,null,{headers:this.header.append(this.parametroToken,this.token)})
  }


}
