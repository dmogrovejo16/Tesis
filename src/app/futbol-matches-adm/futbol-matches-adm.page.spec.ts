import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutbolMatchesAdmPage } from './futbol-matches-adm.page';

describe('FutbolMatchesAdmPage', () => {
  let component: FutbolMatchesAdmPage;
  let fixture: ComponentFixture<FutbolMatchesAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FutbolMatchesAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
