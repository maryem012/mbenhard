import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectlistSecComponent } from './projectlist-sec.component';

describe('ProjectlistSecComponent', () => {
  let component: ProjectlistSecComponent;
  let fixture: ComponentFixture<ProjectlistSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectlistSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectlistSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
