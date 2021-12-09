import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrocompComponent } from './otrocomp.component';

describe('OtrocompComponent', () => {
  let component: OtrocompComponent;
  let fixture: ComponentFixture<OtrocompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrocompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrocompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
