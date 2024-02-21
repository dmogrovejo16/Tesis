import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateVolleyMatchAdmPage } from './create-volley-match-adm.page';

describe('CreateVolleyMatchAdmPage', () => {
  let component: CreateVolleyMatchAdmPage;
  let fixture: ComponentFixture<CreateVolleyMatchAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateVolleyMatchAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
