import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosViewEstPage } from './photos-view-est.page';

describe('PhotosViewEstPage', () => {
  let component: PhotosViewEstPage;
  let fixture: ComponentFixture<PhotosViewEstPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosViewEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
