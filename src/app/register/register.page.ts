import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  nombre: string = '';
  password: string = '';

  constructor(private router: Router) {}

  crearCuenta() {
    if (this.nombre && this.password) {
      // Guardar los datos en localStorage
      localStorage.setItem('usuario', JSON.stringify({ nombre: this.nombre, password: this.password }));
      alert('Cuenta creada exitosamente');
      // Redirigir al login
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}

