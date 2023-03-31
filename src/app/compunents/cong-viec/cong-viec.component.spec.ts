import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongViecComponent } from './cong-viec.component';

describe('CongViecComponent', () => {
  let component: CongViecComponent;
  let fixture: ComponentFixture<CongViecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongViecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
