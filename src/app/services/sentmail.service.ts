import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SentmailService {

  constructor(private http: HttpClient) { }
  add(data:any):Observable<[]>{
    return this.http.post<[]>('https://localhost:44363/api/Smtp',data);
  }
}
