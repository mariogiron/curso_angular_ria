import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


/**
 * - Formulario dentro de el componente Login (email, password)
 *  - ¡Importar ReactiveFormsModule!
 * - Servicio Auth
 *  - POST /api/usuarios/login BODY: email y password
 * 
 * "email": "cursoangular@gmail.com"
 * "password": "12345"
 */
