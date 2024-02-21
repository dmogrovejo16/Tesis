import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutbolEstPage } from './futbol-est.page';

describe('FutbolEstPage', () => {
  let component: FutbolEstPage;
  let fixture: ComponentFixture<FutbolEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FutbolEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
