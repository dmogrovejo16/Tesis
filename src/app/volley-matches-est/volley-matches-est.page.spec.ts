import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolleyMatchesEstPage } from './volley-matches-est.page';

describe('VolleyMatchesEstPage', () => {
  let component: VolleyMatchesEstPage;
  let fixture: ComponentFixture<VolleyMatchesEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolleyMatchesEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
