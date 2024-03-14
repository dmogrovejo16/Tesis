import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllMatchesAdmPage } from './all-matches-adm.page';

describe('AllMatchesAdmPage', () => {
  let component: AllMatchesAdmPage;
  let fixture: ComponentFixture<AllMatchesAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllMatchesAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
