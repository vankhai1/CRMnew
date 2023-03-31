import { Khtn } from './../interface/khtn';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lhkh } from '../interface/lhkh';

@Injectable({
  providedIn: 'root'
})
export class KhangHangTNService {

  constructor(private http:HttpClient) { }
  getList():Observable<Khtn[]>{
    return this.http.get<Khtn[]>('https://localhost:44363/api/KHTN');
    
  }
  getLHKH():Observable<Lhkh[]>{
    return this.http.get<Lhkh[]>('https://localhost:44363/api/LHKH');
  }
 
}
