import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsEstPage } from './news-est.page';

describe('NewsEstPage', () => {
  let component: NewsEstPage;
  let fixture: ComponentFixture<NewsEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
