import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllFutbolMatchesAdmPage } from './all-futbol-matches-adm.page';

describe('AllFutbolMatchesAdmPage', () => {
  let component: AllFutbolMatchesAdmPage;
  let fixture: ComponentFixture<AllFutbolMatchesAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllFutbolMatchesAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
