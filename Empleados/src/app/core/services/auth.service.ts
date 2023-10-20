import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

type FormLogin = { email: string, password: string };
type FormLoginResponse = { success: string, token: string, error: string };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authSubject = new BehaviorSubject<boolean>(false);

  private baseUrl: string = 'https://crmempleados.ngrok.app/api/usuarios';

  constructor(private httpClient: HttpClient) { }

  login(values: FormLogin): Promise<FormLoginResponse> {
    return firstValueFrom(
      this.httpClient.post<FormLoginResponse>(`${this.baseUrl}/login`, values)
    );
  }

  loginSuccess() {
    this.authSubject.next(true);
  }

  get authObs() {
    return this.authSubject.asObservable();
  }

}
