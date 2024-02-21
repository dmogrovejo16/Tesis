import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HomeEstPage } from './home-est.page';

describe('HomeEstPage', () => {
  let component: HomeEstPage;
  let fixture: ComponentFixture<HomeEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
