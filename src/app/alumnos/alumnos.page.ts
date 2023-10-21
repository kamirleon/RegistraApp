import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  public characters: any;

  constructor(private rmService: ApiService, private router:Router) { }


  ngOnInit(): void {
    this.rmService.getCharacters().subscribe(
      (data)=> {
        this.characters = data;
        localStorage.setItem('characters', JSON.stringify(data));
        console.log(data);
      }
    )
  }

  detalle(personaje: any){
    console.log(personaje);
    localStorage.setItem('characters',JSON.stringify(personaje));
    this.router.navigateByUrl('/detalle-alumnos');
  }

}