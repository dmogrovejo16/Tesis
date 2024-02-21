import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutbolMatchesThirdEstPage } from './futbol-matches-third-est.page';

describe('FutbolMatchesThirdEstPage', () => {
  let component: FutbolMatchesThirdEstPage;
  let fixture: ComponentFixture<FutbolMatchesThirdEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FutbolMatchesThirdEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
