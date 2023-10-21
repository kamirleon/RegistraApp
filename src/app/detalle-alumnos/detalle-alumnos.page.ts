import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-alumnos',
  templateUrl: './detalle-alumnos.page.html',
  styleUrls: ['./detalle-alumnos.page.scss'],
})
export class DetalleAlumnosPage implements OnInit {
  public personaje:any;

  constructor() { }

  ngOnInit() {
    const _personaje = localStorage.getItem('characters');
    
    if(_personaje == null){

    }
    else{
      
      this.personaje = JSON.parse(_personaje);
    }
  }

}