import { LienHeKHService } from './../../services/lien-he-kh.service';
import { Component, Inject, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormGroup } from '@angular/forms';
import { Lhkh } from 'src/app/interface/lhkh';

@Component({
  selector: 'app-lien-he-kh',
  templateUrl: './lien-he-kh.component.html',
  styleUrls: ['./lien-he-kh.component.css']
})
export class LienHeKHComponent implements OnInit {
  title="LienHeKH";
  
  lienheKHs:Lhkh[]=[];
 
 updateMode:boolean=false;
 currentLHKHId:any;


  lienheForm = this.fb.group({
    hoTenKH:undefined,
    emailKH:undefined,
    sdtkh:undefined,
    nskh:undefined,
    tieuDe:undefined,
  });
  name = 'Angular';
  goToBottom(){
    window.scrollTo(0,document.body.scrollHeight);
   
    
  }
  
  constructor(private lhkhService:LienHeKHService, private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.lhkhService.getList().subscribe(res=>{
      console.log(res);
      this.lienheKHs=res;
    })
  }
  getAll(){
    this.lhkhService.getList().subscribe(res=>{
      this.lienheKHs=res;
      
    })
  }
  SubMit(){
    console.log(this.lienheForm)
    if(!this.updateMode){
      this.lhkhService.add(this.lienheForm.value).subscribe(res=>{
        this.getAll();
        this.lienheForm.reset();
        alert('Them Thanh Cong')
      });   
    }
    else{
      
        this.lhkhService.update(this.currentLHKHId,this.lienheForm.value).subscribe(res=>{
          this.getAll();
          this.lienheForm.reset();
          alert('sua thanh cong')
        })
        
    } 
   
  }
  onEdit(id:number){
    this.currentLHKHId=id;
    let currentLHKH= this.lienheKHs.find((p)=>{return p.idLHKH ==id})
      console.log(currentLHKH);
      
      console.log(this.lienheForm);
      
    
    this.lienheForm.setValue({
       hoTenKH: currentLHKH?.hoTenKH,
      emailKH: currentLHKH?.emailKH,
      sdtkh: currentLHKH?.sdtkh,
      nskh: currentLHKH?.nskh,
      tieuDe:currentLHKH?.tieuDe,
      
    })
    this.updateMode=true;
    
    
  }

  onremove(id:number){
    this.lhkhService.remove(id).subscribe(res=>{
      console.log(res)
    })
    alert(' Xoa '+id)
  }
  

}
