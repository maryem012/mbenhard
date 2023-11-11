import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAltSecComponent } from './project-alt-sec.component';

describe('ProjectAltSecComponent', () => {
  let component: ProjectAltSecComponent;
  let fixture: ComponentFixture<ProjectAltSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAltSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAltSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
