import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaoDichComponent } from './giao-dich.component';

describe('GiaoDichComponent', () => {
  let component: GiaoDichComponent;
  let fixture: ComponentFixture<GiaoDichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiaoDichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiaoDichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
