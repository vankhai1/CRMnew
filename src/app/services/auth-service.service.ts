
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
 private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      //Authorization: 'my-auth-token'
    }),
  }
  constructor(private http:HttpClient, private router:Router) { }

  

  login(data: any):Observable<any>{
      
    return this.http.post(`${baseUrl}Login/Login`,data)
  }
  addlogin(data:any):Observable<any>{
    return this.http.post('https://localhost:44363/api/TaiKhoan',data)
  }
  getlogin():Observable<any>{
    return this.http.get('https://localhost:44363/api/TaiKhoan')
  }
  isLoginIn(){
    return localStorage.getItem('token')!=null;
    
  }
}
