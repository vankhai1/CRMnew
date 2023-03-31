
import { AuthServiceService } from '../../services/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  responsedata:any;
  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
    
  }
  initForm(){
    this.formGroup=new FormGroup({
      tenTaiKhoan: new FormControl('',[Validators.required]),
      matkhau: new FormControl('',[Validators.required])
    })
  }
  loginProces(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        this.responsedata=result; 
        if(result!=null){
          if(result.success==true){
            this.router.navigate(['']);
            console.log(result);
              alert(result.message);
                
                localStorage.setItem('token',this.responsedata.data);   
          }
          else{    
            alert(result.message);
            
            }

        }
       
        
      })
    }
    
  }
  
}
