import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortableModule } from 'ngx-bootstrap/sortable';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './compunents/login/login.component';
import { ResigterComponent } from './compunents/resigter/resigter.component';
import { NavComponent } from './compunents/nav/nav.component';
import { HomeComponent } from './compunents/home/home.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { KhachHangTNComponent } from './compunents/khach-hang-tn/khach-hang-tn.component';
// import { LienHeKHComponent } from './compunents/lien-he-kh/lien-he-kh.component';
import { TrangchuComponent } from './compunents/trangchu/trangchu.component';
import { CongViecComponent } from './compunents/cong-viec/cong-viec.component';
import { TaiKhoanComponent } from './compunents/tai-khoan/tai-khoan.component';
// import { GiaoDichComponent } from './compunents/giao-dich/giao-dich.component';
import { BaoCaoComponent } from './compunents/bao-cao/bao-cao.component';
import { SentMailComponent } from './compunents/sent-mail/sent-mail.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResigterComponent,
    NavComponent,
    HomeComponent,
    // KhachHangTNComponent,
    // LienHeKHComponent,
    TrangchuComponent,
    CongViecComponent,
    TaiKhoanComponent,
    // GiaoDichComponent,
    BaoCaoComponent,
    SentMailComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    SortableModule.forRoot(),
    ModalModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
