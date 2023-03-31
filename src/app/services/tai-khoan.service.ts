import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { nhanvien } from '../interface/nhanvien';

@Injectable({
  providedIn: 'root'
})
export class TaiKhoanService {

  constructor(private http:HttpClient) { }
  getList():Observable<nhanvien[]>{
    return this.http.get<nhanvien[]>('https://localhost:44363/api/NhanVien');
  }
}
