gimport { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectDataComponent } from './create-project-data.component';

describe('CreateProjectDataComponent', () => {
  let component: CreateProjectDataComponent;
  let fixture: ComponentFixture<CreateProjectDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
