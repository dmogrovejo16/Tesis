import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasquetMatchesThirdEstPage } from './basquet-matches-third-est.page';

describe('BasquetMatchesThirdEstPage', () => {
  let component: BasquetMatchesThirdEstPage;
  let fixture: ComponentFixture<BasquetMatchesThirdEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasquetMatchesThirdEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
