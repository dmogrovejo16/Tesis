import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolleyEstPage } from './volley-est.page';

describe('VolleyEstPage', () => {
  let component: VolleyEstPage;
  let fixture: ComponentFixture<VolleyEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VolleyEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
