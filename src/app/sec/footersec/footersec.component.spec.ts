import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootersecComponent } from './footersec.component';

describe('FootersecComponent', () => {
  let component: FootersecComponent;
  let fixture: ComponentFixture<FootersecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootersecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootersecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
