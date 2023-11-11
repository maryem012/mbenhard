import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencySecComponent } from './agency-sec.component';

describe('AgencySecComponent', () => {
  let component: AgencySecComponent;
  let fixture: ComponentFixture<AgencySecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencySecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencySecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
