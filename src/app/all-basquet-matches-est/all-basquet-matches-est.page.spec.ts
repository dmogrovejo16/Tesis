import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllBasquetMatchesEstPage } from './all-basquet-matches-est.page';

describe('AllBasquetMatchesEstPage', () => {
  let component: AllBasquetMatchesEstPage;
  let fixture: ComponentFixture<AllBasquetMatchesEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllBasquetMatchesEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
