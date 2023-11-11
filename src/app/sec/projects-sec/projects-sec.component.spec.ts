import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSecComponent } from './projects-sec.component';

describe('ProjectsSecComponent', () => {
  let component: ProjectsSecComponent;
  let fixture: ComponentFixture<ProjectsSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
