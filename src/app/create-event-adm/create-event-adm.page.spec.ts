import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEventAdmPage } from './create-event-adm.page';

describe('CreateEventAdmPage', () => {
  let component: CreateEventAdmPage;
  let fixture: ComponentFixture<CreateEventAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
