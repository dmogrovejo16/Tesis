import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosViewAdmPage } from './photos-view-adm.page';

describe('PhotosViewAdmPage', () => {
  let component: PhotosViewAdmPage;
  let fixture: ComponentFixture<PhotosViewAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhotosViewAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
