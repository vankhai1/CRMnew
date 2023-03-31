import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiKhoanComponent } from './tai-khoan.component';

describe('TaiKhoanComponent', () => {
  let component: TaiKhoanComponent;
  let fixture: ComponentFixture<TaiKhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiKhoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaiKhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
