import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FutbolAdmPage } from './futbol-adm.page';

describe('FutbolAdmPage', () => {
  let component: FutbolAdmPage;
  let fixture: ComponentFixture<FutbolAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FutbolAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
