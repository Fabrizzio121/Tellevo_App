import { Component, OnInit } from '@angular/core';
import { ViajeService } from '../viaje.service';

@Component({
  selector: 'app-ver-viajes',
  templateUrl: './ver-viajes.page.html',
  styleUrls: ['./ver-viajes.page.scss'],
})
export class VerViajesPage implements OnInit {
  viajes: any[] = [];
  viajeSeleccionado: any = null;
  usuarioLogueado: string = '';
  mensajeUnido: string | null = null; // Mensaje de unión al viaje

  constructor(private viajeService: ViajeService) {}

  ngOnInit() {
    this.viajes = this.viajeService.obtenerViajes();
    this.usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado') || '{}').nombre || 'Usuario';
    
    // Verificar si ya se ha unido a algún viaje
    const viajeUnido = this.viajes.find(v => v.unidos.includes(this.usuarioLogueado));
    if (viajeUnido) {
      this.mensajeUnido = `Te has unido a ${viajeUnido.nombre}. El costo de tu viaje es $${viajeUnido.precio}. Deberás pagarlo al conductor en el vehículo.`;
    } else {
      this.mensajeUnido = null; // Reiniciar si no hay unión
    }
  }

  seleccionarViaje(viaje: any) {
    this.viajeSeleccionado = viaje;
    // No limpiar el mensaje aquí; solo se mostrará si el usuario ya se unió
  }

  unirseAlViaje() {
    if (this.viajeSeleccionado) {
      this.viajeService.unirseViaje(this.viajeSeleccionado, this.usuarioLogueado);
      this.mensajeUnido = `Te has unido a ${this.viajeSeleccionado.nombre}. El costo de tu viaje es $${this.viajeSeleccionado.precio}. Deberás pagarlo al conductor en el vehículo.`;
      
      // Almacenar el mensaje en localStorage
      localStorage.setItem('mensajeUnido', this.mensajeUnido);

      this.viajeSeleccionado = null; // Resetear selección después de unirse
    }
  }
}
