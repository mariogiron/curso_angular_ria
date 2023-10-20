import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private baseUrl: string = 'https://crmempleados.ngrok.app/api/empleados';

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<Empleado[]> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     authorization: localStorage.getItem('token')!
    //   })
    // }

    // GET /api/empleados
    return firstValueFrom(
      this.httpClient.get<Empleado[]>(this.baseUrl/**, httpOptions*/)
    );
  }

  create(empleado: Empleado) {
    return firstValueFrom(
      this.httpClient.post(this.baseUrl, empleado)
    );
  }

}
