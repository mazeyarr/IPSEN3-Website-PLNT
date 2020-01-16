import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateStepperComponent } from './project-create-stepper.component';

describe('ProjectCreateStepperComponent', () => {
  let component: ProjectCreateStepperComponent;
  let fixture: ComponentFixture<ProjectCreateStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreateStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreateStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
