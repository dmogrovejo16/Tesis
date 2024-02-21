import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutbolMatchesSecondEstPage } from './futbol-matches-second-est.page';

describe('FutbolMatchesSecondEstPage', () => {
  let component: FutbolMatchesSecondEstPage;
  let fixture: ComponentFixture<FutbolMatchesSecondEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FutbolMatchesSecondEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
