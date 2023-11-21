import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { logingDetails } from '../interface/categoryInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private  authService: AuthService, private router: Router){}

  onSubmit(form){

    
    const loginEmail = form.value.email
    const loginpassword = form.value.password    

    this.authService.loginAuth(loginEmail, loginpassword)
    form.reset()
    this.router.navigate(['/login/dashboard'])
  }
}

