import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AllFutbolMatchesEstPage } from './all-futbol-matches-est.page';

describe('AllFutbolMatchesEstPage', () => {
  let component: AllFutbolMatchesEstPage;
  let fixture: ComponentFixture<AllFutbolMatchesEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllFutbolMatchesEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
