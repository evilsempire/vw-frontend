import { Component } from '@angular/core';
import {AuthService} from './services/auth-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn: boolean;
  isBlueColor = false;
  isGreenColor = false;

  constructor(public authService: AuthService, private router: Router) {

    this.authService.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
        } else {

          if (auth) {
            this.authService.displayName = auth.displayName;
            this.authService.email = auth.email;
          } else {
            this.authService.displayName = auth.email;
            this.authService.email = auth.email;
          }

          this.isLoggedIn = true;
        }
      }
    );

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  changeToBlue(): void {
    this.isBlueColor = !this.isBlueColor;
  }

  changeToGreen(): void {
    this.isGreenColor = !this.isGreenColor;
  }

}
