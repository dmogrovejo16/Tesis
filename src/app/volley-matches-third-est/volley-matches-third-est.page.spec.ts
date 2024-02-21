import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolleyMatchesThirdEstPage } from './volley-matches-third-est.page';

describe('VolleyMatchesThirdEstPage', () => {
  let component: VolleyMatchesThirdEstPage;
  let fixture: ComponentFixture<VolleyMatchesThirdEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolleyMatchesThirdEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
