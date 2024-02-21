import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolleyMatchesAdmPage } from './volley-matches-adm.page';

describe('VolleyMatchesAdmPage', () => {
  let component: VolleyMatchesAdmPage;
  let fixture: ComponentFixture<VolleyMatchesAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolleyMatchesAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
