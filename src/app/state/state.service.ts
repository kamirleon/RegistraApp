import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {


  nombre:BehaviorSubject<string> = new BehaviorSubject('Alumno');
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
  constructor() { }
}
