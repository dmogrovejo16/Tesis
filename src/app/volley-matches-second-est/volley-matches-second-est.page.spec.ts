import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolleyMatchesSecondEstPage } from './volley-matches-second-est.page';

describe('VolleyMatchesSecondEstPage', () => {
  let component: VolleyMatchesSecondEstPage;
  let fixture: ComponentFixture<VolleyMatchesSecondEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolleyMatchesSecondEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
