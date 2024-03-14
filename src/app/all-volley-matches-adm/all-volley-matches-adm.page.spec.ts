import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllVolleyMatchesAdmPage } from './all-volley-matches-adm.page';

describe('AllVolleyMatchesAdmPage', () => {
  let component: AllVolleyMatchesAdmPage;
  let fixture: ComponentFixture<AllVolleyMatchesAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllVolleyMatchesAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
