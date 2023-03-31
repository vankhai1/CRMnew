import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthServiceService } from './../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resigter',
  templateUrl: './resigter.component.html',
  styleUrls: ['./resigter.component.css']
})
export class ResigterComponent implements OnInit {
  dangkys:any
  resigterForm=this.fb.group({
    tenTaiKhoan:undefined,
    matKhau:undefined,
  })
  updateMode:boolean=false;
  constructor(private authService:AuthServiceService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  
   SubMit(){
    console.log(this.resigterForm)
      this.authService.addlogin(this.resigterForm.value).subscribe(res=>{
       this.dangkys=res;
       console.log(res)
        this.resigterForm.reset();
        alert('Them Thanh Cong')
        this.router.navigate(['login'])
      });   

  }

}
