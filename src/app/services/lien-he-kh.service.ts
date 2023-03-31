import { Lhkh } from './../interface/lhkh';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LienHeKHService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
  getList():Observable<Lhkh[]>{
    return this.http.get<Lhkh[]>('https://localhost:44363/api/LHKH');
  }
  add(data:any):Observable<Lhkh[]>{
    return this.http.post<Lhkh[]>('https://localhost:44363/api/LHKH',data);
  }
  remove(id:number):Observable<Lhkh[]>{
    return this.http.delete<Lhkh[]>('https://localhost:44363/api/LHKH/'+id);
  }
  update(id:number,data:any):Observable<Lhkh[]>{
    return this.http.put<Lhkh[]>('https://localhost:44363/api/LHKH/id?id='+id,data)
  }
  
}
