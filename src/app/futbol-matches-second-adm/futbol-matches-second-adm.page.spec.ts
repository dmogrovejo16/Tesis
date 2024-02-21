import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutbolMatchesSecondAdmPage } from './futbol-matches-second-adm.page';

describe('FutbolMatchesSecondAdmPage', () => {
  let component: FutbolMatchesSecondAdmPage;
  let fixture: ComponentFixture<FutbolMatchesSecondAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FutbolMatchesSecondAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
