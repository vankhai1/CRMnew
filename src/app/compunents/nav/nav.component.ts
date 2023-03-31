import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginUser!:string|null
  constructor() { }

  ngOnInit(): void {
  }
  loginProces(){
    this.loginUser= localStorage.getItem('token');
    return this.loginUser;
  }
  onLogout(){
    return localStorage.removeItem('token');
  }
}
