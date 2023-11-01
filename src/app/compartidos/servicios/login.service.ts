import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private peticion:HttpClient) { }

  public Login(login: any):Observable<any>
  {
    let uri=`https://localhost:44331/api/login`

    return this.peticion.post(uri,login)
  }
}
