import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
username = '';
  email = '';             
  password = '';
  confirmPassword = '';
  isAdmin = false;
  role=''
  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  register(){
    if(this.password!=this.confirmPassword){
      alert('password do not match');
      return;
    }
    const payload:any=
    {
      username:this.username,
      role:this.role,
      password:this.password
    };
    if(this.isAdmin){
      payload.role='ROLE_ADMIN';
    }
    else{
      payload.role='ROLE_USER';
    }
    this.authService.register(payload).subscribe({
      next:()=>{
        alert('registration succesful');
        this.router.navigate(['/login']);
      },
      // error:()=>alert("registration failed")
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        console.log(err.status)
        console.log(err.error?.message);
      }
    })
  }
}
