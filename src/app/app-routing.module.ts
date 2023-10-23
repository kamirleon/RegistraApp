import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // 1. Importa tu guardián aquí


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'inicio',
    canActivate: [AuthGuard],
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
    
  },
  {
    path: 'alumnos',
    canActivate: [AuthGuard],
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'detalle-alumnos/:idUser',
    canActivate: [AuthGuard],
    loadChildren: () => import('./detalle-alumnos/detalle-alumnos.module').then( m => m.DetalleAlumnosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
