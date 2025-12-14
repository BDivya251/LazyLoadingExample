import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './admindashboard.html',
  styleUrl: './admindashboard.css',
})
export class Admindashboard {
constructor(
    private authService:AuthService,
    private router:Router,
  ){}
  logout() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}
