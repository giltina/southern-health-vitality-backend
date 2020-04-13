import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionersComponent } from './practitioners.component';

describe('PractitionersComponent', () => {
  let component: PractitionersComponent;
  let fixture: ComponentFixture<PractitionersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractitionersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractitionersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
