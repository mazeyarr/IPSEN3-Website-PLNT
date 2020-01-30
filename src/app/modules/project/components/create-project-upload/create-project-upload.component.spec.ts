import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectUploadComponent } from './create-project-upload.component';

describe('CreateProjectUploadComponent', () => {
  let component: CreateProjectUploadComponent;
  let fixture: ComponentFixture<CreateProjectUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
