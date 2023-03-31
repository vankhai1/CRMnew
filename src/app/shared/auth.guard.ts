import { AuthServiceService } from './../services/auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthServiceService,private router:Router){

  }
  canActivate(){
    if(this.authService.isLoginIn()){
      return true;
    }
    else(this.authService.isLoginIn())
    {
      this.router.navigate(["login"])
      alert('Dang Nhap di')
      return false;
    }
   
  }
  
}
