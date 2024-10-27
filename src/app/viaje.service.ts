import { Injectable } from '@angular/core';

// Definición de la interfaz Viaje
export interface Viaje {
  nombre: string;
  carrera: string;
  destino: string;
  precio: number; // Agregado para incluir el precio
  unidos: string[]; // Lista de nombres de los que se unieron
  usuario: string; // Añadido para identificar al creador del viaje
}

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  private viajesKey: string = 'viajes'; // Clave para almacenar los viajes en localStorage

  constructor() {}

  agregarViaje(viaje: Viaje) {
    const viajes = this.obtenerViajes(); // Obtén los viajes existentes
    viaje.unidos = []; // Inicializa el array de uniones
    viajes.push(viaje); // Agrega el nuevo viaje
    localStorage.setItem(this.viajesKey, JSON.stringify(viajes)); // Guarda los viajes en localStorage
  }

  obtenerViajes(usuario?: string): Viaje[] {
    const viajes = localStorage.getItem(this.viajesKey);
    const viajesTodos = viajes ? JSON.parse(viajes) : [];
    return usuario ? viajesTodos.filter((v: Viaje) => v.usuario === usuario) : viajesTodos; // Filtrar por usuario
  }

  unirseViaje(viaje: Viaje, usuario: string) {
    const viajes = this.obtenerViajes(); // Obtiene los viajes existentes
    const viajeEncontrado = viajes.find((v: Viaje) => v.nombre === viaje.nombre && v.destino === viaje.destino);

    if (viajeEncontrado) {
      if (!viajeEncontrado.unidos.includes(usuario)) {
        viajeEncontrado.unidos.push(usuario); // Agrega al usuario a la lista de uniones solo si no está ya en la lista
        localStorage.setItem(this.viajesKey, JSON.stringify(viajes)); // Guarda los cambios en localStorage
      }
    }
  }

  obtenerPasajeros(nombre: string, destino: string): string[] {
    const viajes = this.obtenerViajes(); // Obtiene los viajes existentes
    const viajeEncontrado = viajes.find((v: Viaje) => v.nombre === nombre && v.destino === destino);
    return viajeEncontrado ? viajeEncontrado.unidos : []; // Retorna la lista de pasajeros
  }
}
