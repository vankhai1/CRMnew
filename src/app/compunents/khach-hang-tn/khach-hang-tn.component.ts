import { Lhkh } from 'src/app/interface/lhkh';
import { Khtn } from './../../interface/khtn';

import { KhangHangTNService } from './../../services/khang-hang-tn.service';
import { Component, OnInit } from '@angular/core';
import { LienHeKHService } from './../../services/lien-he-kh.service';


@Component({
  selector: 'app-khach-hang-tn',
  templateUrl: './khach-hang-tn.component.html',
  styleUrls: ['./khach-hang-tn.component.css']
})
export class KhachHangTNComponent implements OnInit {
  title="Khách Hàng Tiềm Năng";

  khachhangs: Khtn[]=[];
  lienheKHs:Lhkh[]=[];
  
  
  name = 'Angular';
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
  }
  
  constructor(private khtnservice:KhangHangTNService ) { }
  getAll(){
    this.khtnservice.getList().subscribe(res=>{
      this.khachhangs=res;
      console.log(res);
    })
    this.khtnservice.getLHKH().subscribe(res=>{
      this.lienheKHs=res;
      console.log(res);
    })
    
  }
  
  ngOnInit(): void {
    
      this.getAll();
    
     
     
        
}


}


