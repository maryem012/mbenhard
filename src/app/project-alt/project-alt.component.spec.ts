import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAltComponent } from './project-alt.component';

describe('ProjectAltComponent', () => {
  let component: ProjectAltComponent;
  let fixture: ComponentFixture<ProjectAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
