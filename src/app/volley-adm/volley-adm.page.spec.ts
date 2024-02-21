import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolleyAdmPage } from './volley-adm.page';

describe('VolleyAdmPage', () => {
  let component: VolleyAdmPage;
  let fixture: ComponentFixture<VolleyAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolleyAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
