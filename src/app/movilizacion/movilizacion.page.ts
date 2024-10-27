import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajeService, Viaje } from '../viaje.service';

@Component({
  selector: 'app-movilizacion',
  templateUrl: './movilizacion.page.html',
  styleUrls: ['./movilizacion.page.scss'],
})
export class MovilizacionPage implements OnInit {
  viajes: Viaje[] = [];
  nombre: string = '';
  carrera: string = '';
  destino: string = '';
  precio: number | null = null; // Nueva propiedad para el precio
  usuarioLogueado: string = '';

  constructor(private viajeService: ViajeService, private router: Router) {}

  ngOnInit() {
    this.usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado') || '{}').nombre || 'Usuario';
    this.viajes = this.viajeService.obtenerViajes(this.usuarioLogueado);
  }

  agregarViaje() {
    if (this.nombre && this.carrera && this.destino && this.precio !== null) {
      const nuevoViaje: Viaje = {
        nombre: this.nombre,
        carrera: this.carrera,
        destino: this.destino,
        precio: this.precio, // Asegúrate de incluir el precio aquí
        unidos: [],
        usuario: this.usuarioLogueado
      };

      this.viajeService.agregarViaje(nuevoViaje);
      this.viajes = this.viajeService.obtenerViajes(this.usuarioLogueado);
      this.limpiarCampos();
    }
  }

  limpiarCampos() {
    this.nombre = '';
    this.carrera = '';
    this.destino = '';
    this.precio = null; // Limpiar el precio también
  }

  verPasajeros(viaje: Viaje) {
    localStorage.setItem('viajeSeleccionado', JSON.stringify(viaje));
    this.router.navigate(['/pasajeros']);
  }
}
