import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSecComponent } from './project-sec.component';

describe('ProjectSecComponent', () => {
  let component: ProjectSecComponent;
  let fixture: ComponentFixture<ProjectSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
