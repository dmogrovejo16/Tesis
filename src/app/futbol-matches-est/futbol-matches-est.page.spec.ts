import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutbolMatchesEstPage } from './futbol-matches-est.page';

describe('FutbolMatchesEstPage', () => {
  let component: FutbolMatchesEstPage;
  let fixture: ComponentFixture<FutbolMatchesEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FutbolMatchesEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
