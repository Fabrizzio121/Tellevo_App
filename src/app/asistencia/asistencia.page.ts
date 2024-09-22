import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  nombre: string = '';
  fecha: string = '';
  hora: string= '';
  codigoQR: string= '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.fecha = params['fecha'];
      this.hora = params['hora'];
      this.codigoQR = params['codigoQR'];
    });
  }
}

