import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',  // Página inicial
    pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'opciones',  // Ruta para la página de opciones
    loadChildren: () => import('./opciones/opciones.module').then(m => m.OpcionesPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'movilizacion',
    loadChildren: () => import('./movilizacion/movilizacion.module').then(m => m.MovilizacionPageModule)
  },
  {
    path: 'ver-viajes',
    loadChildren: () => import('./ver-viajes/ver-viajes.module').then(m => m.VerViajesPageModule)
  },
  {
    path: 'pasajeros',
    loadChildren: () => import('./pasajeros/pasajeros.module').then( m => m.PasajerosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
