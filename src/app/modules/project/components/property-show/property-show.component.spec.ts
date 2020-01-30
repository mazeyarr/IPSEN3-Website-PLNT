import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyShowComponent } from './property-show.component';

describe('PropertyShowComponent', () => {
  let component: PropertyShowComponent;
  let fixture: ComponentFixture<PropertyShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
