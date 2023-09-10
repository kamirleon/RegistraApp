import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private stateService: StateService, private alertController: AlertController,) {

    this.formulariologin = this.fb.group({
      nombre: [''],
      contrasena: [''],

    })


  }

  ngOnInit() {
    this.stateService.setTitulo = 'Iniciar sesión'

  }

  // initForms() {
  //   this.formulariologin = this.fb.group({
  //     nombre: [, Validators.required],
  //     contrasena: [, Validators.required]
  //   });
  // }

  // validarForm(): any {
  //   if (this.formulariologin.value.nombre === null || this.formulariologin.value.contrasena === null) {
  //     console.log("Están vacios")
  //   }
  // }

  async ingresar() {
    const alumno = {
      nombre: this.formulariologin.get('nombre')?.value,
      contrasena: this.formulariologin.get('contrasena')?.value,
    };

    this.stateService.setNombre = alumno.nombre;
    if (alumno.nombre == '' || alumno.contrasena == '') {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
    } else {
      const successAlert = await this.alertController.create({
        header: '¡Ingreso exitoso!',
        message: 'Gracias por registrar tu asistencia',
        buttons: [{
          text: 'Continuar',
          handler: () => {
            this.router.navigate(['/inicio']);
          }
        }]
      });

      await successAlert.present();
    }
}



  recuperar() {
    this.router.navigate(['/recuperar-contrasena'])
  }


}
