import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileEstPage } from './profile-est.page';

describe('ProfileEstPage', () => {
  let component: ProfileEstPage;
  let fixture: ComponentFixture<ProfileEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
