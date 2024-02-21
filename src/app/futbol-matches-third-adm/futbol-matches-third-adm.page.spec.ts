import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FutbolMatchesThirdAdmPage } from './futbol-matches-third-adm.page';

describe('FutbolMatchesThirdAdmPage', () => {
  let component: FutbolMatchesThirdAdmPage;
  let fixture: ComponentFixture<FutbolMatchesThirdAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FutbolMatchesThirdAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
