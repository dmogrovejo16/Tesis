import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileAdmPage } from './profile-adm.page';

describe('ProfileAdmPage', () => {
  let component: ProfileAdmPage;
  let fixture: ComponentFixture<ProfileAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
