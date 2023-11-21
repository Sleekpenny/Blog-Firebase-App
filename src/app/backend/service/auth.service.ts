import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CategoryServiceService } from './category-service.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); 
  isLoggedInGuard : boolean =  false

  constructor(private authService:AngularFireAuth, private categoryService: CategoryServiceService, private router: Router) { }

  loginAuth(email, password){
    this.authService.signInWithEmailAndPassword(email, password).then(()=>{
      this.categoryService.show('BoomYa!! Success👍')
      this.loadUser()
      this.loggedIn.next(true)
      this.isLoggedInGuard = true 
    }).catch(()=>{
      this.categoryService.show('hu hu there was an error 😔')
    });
  }

  loadUser(){
    this.authService.authState.subscribe((docRef)=>{
      const userDetails  = JSON.stringify(docRef);
      localStorage.setItem('userDetail', userDetails)
    })
  }

  logOut(){
    this.authService.signOut().then(()=>{
      this.categoryService.show('BoomYa!! Success👍')
      this.router.navigate(['/login'])
      localStorage.removeItem('userDetail')
      this.loggedIn.next(false)
      this.isLoggedInGuard = false
    })
  }
  
  isLoggedIn() {
    return this.loggedIn.asObservable()
    this 
  }
}
