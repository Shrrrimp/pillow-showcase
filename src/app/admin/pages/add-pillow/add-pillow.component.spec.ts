import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPillowComponent } from './add-pillow.component';

describe('AddPillowComponent', () => {
  let component: AddPillowComponent;
  let fixture: ComponentFixture<AddPillowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPillowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPillowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
