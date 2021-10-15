import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class VehiculoService {
  private API_MARCAS =
    'https://servicios.qamercantilandina.com.ar/api/v1/vehiculos/marcas';

  constructor(private http: HttpClient) {}

  getMarcas(): Observable<any> {
    return this.http.get(this.API_MARCAS);
  }
}
