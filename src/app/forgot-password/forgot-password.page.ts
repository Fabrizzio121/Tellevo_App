import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage {
  nombre: string = '';
  newPassword: string = '';

  constructor(private router: Router) {}

  changePassword() {
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario') || '{}');
    
    if (this.nombre === usuarioGuardado.nombre) {
      // Cambiar la contraseña
      usuarioGuardado.password = this.newPassword;
      localStorage.setItem('usuario', JSON.stringify(usuarioGuardado));
      alert('Contraseña cambiada con éxito');
      this.router.navigate(['/login']);
    } else {
      alert('Nombre de usuario no encontrado');
    }
  }
}
