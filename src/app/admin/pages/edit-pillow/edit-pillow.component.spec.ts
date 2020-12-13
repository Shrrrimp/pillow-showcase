import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPillowComponent } from './edit-pillow.component';

describe('EditPillowComponent', () => {
  let component: EditPillowComponent;
  let fixture: ComponentFixture<EditPillowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPillowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPillowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
