import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  cargada = false;

  constructor(
    private http: HttpClient
  ) {
    this.http.get('assets/data/data-page.json')
      .subscribe((data: InfoPage) => {
        this.info = data;
        this.cargada = true;
      })
  }
}
