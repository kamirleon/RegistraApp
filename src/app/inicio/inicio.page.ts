import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

 nombre: string ='';

  constructor( private stateService:StateService) { }

  ngOnInit() {

    this.stateService.getNombre.subscribe((nombre)=>{
      this.nombre =nombre;
    })
    this.stateService.setTitulo = 'Inicio'

  
  }

  tarerNombre(){
    this.stateService.getNombre;
  }

}
