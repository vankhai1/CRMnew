import { nhanvien } from './../interface/nhanvien';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrangChuService {

  constructor(private http:HttpClient) { }

  getList():Observable<nhanvien[]>{
    return this.http.get<nhanvien[]>('https://localhost:44363/api/NhanVien');
  }
}
