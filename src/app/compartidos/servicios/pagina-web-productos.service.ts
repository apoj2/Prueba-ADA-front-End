import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginaWebProductosService {

  public header! : HttpHeaders ;
  public parametroToken!:string;
  public token!:any
  constructor(private peticion:HttpClient) { 

    this.header = new HttpHeaders();
    this.parametroToken = 'TokenAcceso';
    this.token = localStorage.getItem('token')?.toString()
  }

  public BuscarFotosProductos():Observable<any>
  {
    let uri=`https://localhost:44331/api/fotoproductolistadoweb` 
    return this.peticion.post(uri,null,{headers:this.header.append(this.parametroToken,this.token)})
  }
  public BuscarProductoPorNombre(nombre: string):Observable<any>
  {
    let uri=`https://localhost:44331/api/productopornombre/?nombre=${nombre}` 
    return this.peticion.post(uri,null,{headers:this.header.append(this.parametroToken,this.token)})
  }
}
