import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillowListComponent } from './pillow-list.component';

describe('PillowListComponent', () => {
  let component: PillowListComponent;
  let fixture: ComponentFixture<PillowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
