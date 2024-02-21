import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolleyMatchesThirdAdmPage } from './volley-matches-third-adm.page';

describe('VolleyMatchesThirdAdmPage', () => {
  let component: VolleyMatchesThirdAdmPage;
  let fixture: ComponentFixture<VolleyMatchesThirdAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolleyMatchesThirdAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
