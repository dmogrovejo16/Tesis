import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventViewAdmPage } from './event-view-adm.page';

describe('EventViewAdmPage', () => {
  let component: EventViewAdmPage;
  let fixture: ComponentFixture<EventViewAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventViewAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
