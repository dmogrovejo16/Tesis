import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsAdmPage } from './news-adm.page';

describe('NewsAdmPage', () => {
  let component: NewsAdmPage;
  let fixture: ComponentFixture<NewsAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
