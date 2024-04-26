import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventViewEstPage } from './event-view-est.page';

describe('EventViewEstPage', () => {
  let component: EventViewEstPage;
  let fixture: ComponentFixture<EventViewEstPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventViewEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
