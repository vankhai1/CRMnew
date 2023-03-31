import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienHeKHComponent } from './lien-he-kh.component';

describe('LienHeKHComponent', () => {
  let component: LienHeKHComponent;
  let fixture: ComponentFixture<LienHeKHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienHeKHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LienHeKHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
