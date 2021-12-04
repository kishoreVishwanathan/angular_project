import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesTrackerComponent } from './fees-tracker.component';

describe('FeesTrackerComponent', () => {
  let component: FeesTrackerComponent;
  let fixture: ComponentFixture<FeesTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeesTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
