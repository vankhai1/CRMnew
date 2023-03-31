import { nhanvien } from './../../interface/nhanvien';
import { TrangChuService } from './../../services/trang-chu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  nhanviens:nhanvien[]=[]
  constructor(private trangchuService:TrangChuService) { }
  
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.trangchuService.getList().subscribe(res=>{
     this.nhanviens=res;
     console.log(res);
   })
}
}
