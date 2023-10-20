import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.authObs.subscribe(loginSuccess => {
      console.log('NavBar', loginSuccess);
    });
  }

}
