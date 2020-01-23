import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectDropzoneComponent } from './create-project-dropzone.component';

describe('CreateProjectDropzoneComponent', () => {
  let component: CreateProjectDropzoneComponent;
  let fixture: ComponentFixture<CreateProjectDropzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectDropzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
