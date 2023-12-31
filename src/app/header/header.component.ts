import { Component, Input, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  
  @Input()
  isHomePage: boolean = false;


  titulo: string='';
  nombre: string ='';


  constructor(private stateService:StateService,
              private router:Router) { }

  ngOnInit() {

    this.stateService.getTitulo.subscribe((titulo)=>{
      this.titulo = titulo;
    })
    this.stateService.getNombre.subscribe((nombre)=>{
      this.nombre =nombre;
    })

  }

  cerrarSesion(){
    this.router.navigate(['login']);
  }

}
