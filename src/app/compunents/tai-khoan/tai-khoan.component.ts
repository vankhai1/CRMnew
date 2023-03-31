import { nhanvien } from './../../interface/nhanvien';
import { TaiKhoanService } from './../../services/tai-khoan.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tai-khoan',
  templateUrl: './tai-khoan.component.html',
  styleUrls: ['./tai-khoan.component.css']
})
export class TaiKhoanComponent implements OnInit {
  nhanviens:nhanvien[]=[]
  constructor(private taikhoanService:TaiKhoanService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.taikhoanService.getList().subscribe(res=>{
     this.nhanviens=res;
     console.log(res);
   })
}

}
