import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'https://rickandmortyapi.com/api';
  private BASE_URL_DUMMY='https://dummyjson.com'
  constructor(private http: HttpClient) { }


  //COMIENZO DE LA API USUARIOS! 

  //Obtener todo los usuarios.
  public getAllUsers(){
    return this.http.get(`${this.BASE_URL_DUMMY}/users`)
  }
  //Obtener Informacion  de un usuario 
  public getASingleUser(id_user:any){
    return this.http.get(`${this.BASE_URL_DUMMY}/users/${id_user}`)
  }


}