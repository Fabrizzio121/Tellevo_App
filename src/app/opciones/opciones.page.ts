import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.page.html',
  styleUrls: ['./opciones.page.scss'],
})
export class OpcionesPage {
  nombreUsuario: string = ''; 

  constructor(private router: Router) {
    this.cargarNombreUsuario();
  }

  cargarNombreUsuario() {
    // Recupera el usuario logueado de localStorage
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado') || '{}');
    this.nombreUsuario = usuarioLogueado.nombre || 'Usuario'; 
  }

  goToScan() {
    this.router.navigate(['/scan']);
  }

  goToAsistencia() {
    this.router.navigate(['/asistencia']);
  }

  logout() {
    // Elimina el usuario logueado del localStorage
    localStorage.removeItem('usuarioLogueado');
    this.router.navigate(['/bienvenida']);
  }
}
