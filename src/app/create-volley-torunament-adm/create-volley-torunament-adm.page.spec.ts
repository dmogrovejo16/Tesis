import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateVolleyTorunamentAdmPage } from './create-volley-torunament-adm.page';

describe('CreateVolleyTorunamentAdmPage', () => {
  let component: CreateVolleyTorunamentAdmPage;
  let fixture: ComponentFixture<CreateVolleyTorunamentAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateVolleyTorunamentAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
