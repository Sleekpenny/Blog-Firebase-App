import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/backend/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  userData:string;
  isLoggedIn$:Observable<boolean>

  constructor(private User: AuthService){}
  ngOnInit(): void {
    const userInfo = JSON.parse(localStorage.getItem('userDetail'))
    this.userData = userInfo.email
    this.isLoggedIn$ =  this.User.isLoggedIn()
  }

  signOut(){
    this.User.logOut()   
  }

  navBg:any

  @HostListener('document:scroll') scrollover(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){

      this.navBg = {
        'background-color' : 'transparent',
        'color' : '#596392',        
        'backdrop-filter': 'blur(9px)',
        '-webkit-backdrop-filter' : 'blur(5px)'
      }
    }else {
      this.navBg = {}
    }
  }


}
