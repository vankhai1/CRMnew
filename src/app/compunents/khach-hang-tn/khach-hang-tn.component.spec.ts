import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachHangTNComponent } from './khach-hang-tn.component';

describe('KhachHangTNComponent', () => {
  let component: KhachHangTNComponent;
  let fixture: ComponentFixture<KhachHangTNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhachHangTNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhachHangTNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
