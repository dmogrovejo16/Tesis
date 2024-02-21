import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolleyMatchesSecondAdmPage } from './volley-matches-second-adm.page';

describe('VolleyMatchesSecondAdmPage', () => {
  let component: VolleyMatchesSecondAdmPage;
  let fixture: ComponentFixture<VolleyMatchesSecondAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolleyMatchesSecondAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
