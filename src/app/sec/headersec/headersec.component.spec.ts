import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersecComponent } from './headersec.component';

describe('HeadersecComponent', () => {
  let component: HeadersecComponent;
  let fixture: ComponentFixture<HeadersecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadersecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
