import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CategoryServiceService } from './category-service.service';

@Injectable({
  providedIn: 'root'
})

/* export class AuthGuard implements CanActivate {
canActivate: any ( 
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
    }
}  */


export class authGuard implements CanActivate {

  constructor (private authService:AuthService, private router: Router, private notification: CategoryServiceService){}
canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree>  | Promise<boolean | UrlTree> | boolean | UrlTree{
    
    if(this.authService.isLoggedInGuard){
      return true
    }else {
      this.router.navigate(['/login']);
      this.notification.show('hu hu there was an error 😔')
      return false
    }
  }
}