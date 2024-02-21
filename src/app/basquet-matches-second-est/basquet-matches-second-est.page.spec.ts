import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasquetMatchesSecondEstPage } from './basquet-matches-second-est.page';

describe('BasquetMatchesSecondEstPage', () => {
  let component: BasquetMatchesSecondEstPage;
  let fixture: ComponentFixture<BasquetMatchesSecondEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasquetMatchesSecondEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
