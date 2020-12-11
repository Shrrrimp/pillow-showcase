import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillowDetailsComponent } from './pillow-details.component';

describe('PillowDetailsComponent', () => {
  let component: PillowDetailsComponent;
  let fixture: ComponentFixture<PillowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
