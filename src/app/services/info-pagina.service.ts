import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page';
import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  equipo: Persona[] = [];
  cargada = false;

  constructor(
    private http: HttpClient
  ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-page.json')
      .subscribe((data: InfoPage) => {
        this.info = data;
        this.cargada = true;
      });
  }

  private cargarEquipo() {
    this.http.get('https://portafolio-hmtl-to-angular-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((data: any) => {
      this.equipo = data;
    });
  }
}
