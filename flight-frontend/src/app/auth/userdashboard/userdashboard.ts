import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userdashboard',
  imports: [],
  templateUrl: './userdashboard.html',
  styleUrl: './userdashboard.css',
})
export class Userdashboard {
  constructor(
    private authService:AuthService,
    private router:Router,
  ){}
  logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}

}
