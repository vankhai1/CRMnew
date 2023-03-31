import { AuthGuard } from './shared/auth.guard';
import { SentMailComponent } from './compunents/sent-mail/sent-mail.component';
import { BaoCaoComponent } from './compunents/bao-cao/bao-cao.component';
import { GiaoDichComponent } from './compunents/giao-dich/giao-dich.component';
import { CongViecComponent } from './compunents/cong-viec/cong-viec.component';
import { KhachHangTNComponent } from './compunents/khach-hang-tn/khach-hang-tn.component';
import { HomeComponent } from './compunents/home/home.component';
import { ResigterComponent } from './compunents/resigter/resigter.component';
import { LoginComponent } from './compunents/login/login.component';
import { NgModule,  Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LienHeKHComponent } from './compunents/lien-he-kh/lien-he-kh.component';
import { TrangchuComponent } from './compunents/trangchu/trangchu.component';
import { TaiKhoanComponent } from './compunents/tai-khoan/tai-khoan.component';


const routes: Routes = [
{path:'', component:HomeComponent},
{path:'login',component: LoginComponent},
{path:'resigter',component:ResigterComponent},
{path:'home', component:HomeComponent},
{path:'lienhekh', component:LienHeKHComponent,canActivate:[AuthGuard]},
{path:'trangchu',component:TrangchuComponent,canActivate:[AuthGuard]},
{path:'congviec',component:CongViecComponent,canActivate:[AuthGuard]},
{path:'taikhoan',component:TaiKhoanComponent,canActivate:[AuthGuard]},
{path:'giaodich',component:GiaoDichComponent,canActivate:[AuthGuard]},
{path:'baocao',component:BaoCaoComponent,canActivate:[AuthGuard]},
{path:'sentmail',component:SentMailComponent},
{
 
  path:'khachhangtn', component:KhachHangTNComponent,
  
children:[{path:'khachhangtn', component:KhachHangTNComponent,},
],canActivate:[AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
