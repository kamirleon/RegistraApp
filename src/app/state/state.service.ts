import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {

  private personajes:BehaviorSubject<any> = new BehaviorSubject(null);


  private isLogged:BehaviorSubject<boolean> =
  new BehaviorSubject<boolean>(false);
  
  getIsLogged(){
    return this.isLogged.asObservable();
  }

  setIsLogged(value:boolean){
    this.isLogged.next(value);
  }

  nombre:BehaviorSubject<string> = new BehaviorSubject('');
  titulo:BehaviorSubject<string> = new BehaviorSubject('RegistraApp');



  get getNombre(){
    return this.nombre.asObservable();
  }

  set setNombre(nombre:string){
    this.nombre.next(nombre);

  }

  get getTitulo(){
    return this.titulo.asObservable();
  }

  set setTitulo(titulo:string){
    this.titulo.next(titulo);
  }

  public obtenerPersonajes(){
    return this.personajes.asObservable();
  }

  public personajesValues(personajes:any){
    this.personajes.next(personajes);
  }
  constructor() { }
}
