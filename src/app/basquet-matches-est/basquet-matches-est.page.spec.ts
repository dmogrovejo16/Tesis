import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasquetMatchesEstPage } from './basquet-matches-est.page';

describe('BasquetMatchesEstPage', () => {
  let component: BasquetMatchesEstPage;
  let fixture: ComponentFixture<BasquetMatchesEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasquetMatchesEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
