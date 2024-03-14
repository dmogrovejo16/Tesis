import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllMatchesEstPage } from './all-matches-est.page';

describe('AllMatchesEstPage', () => {
  let component: AllMatchesEstPage;
  let fixture: ComponentFixture<AllMatchesEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllMatchesEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
