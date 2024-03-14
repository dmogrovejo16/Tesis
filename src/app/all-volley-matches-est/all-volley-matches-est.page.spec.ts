import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllVolleyMatchesEstPage } from './all-volley-matches-est.page';

describe('AllVolleyMatchesEstPage', () => {
  let component: AllVolleyMatchesEstPage;
  let fixture: ComponentFixture<AllVolleyMatchesEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllVolleyMatchesEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
