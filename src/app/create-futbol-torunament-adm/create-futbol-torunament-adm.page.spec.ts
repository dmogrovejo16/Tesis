import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CreateFutbolTorunamentAdmPage } from './create-futbol-torunament-adm.page';

describe('CreateFutbolTorunamentAdmPage', () => {
  let component: CreateFutbolTorunamentAdmPage;
  let fixture: ComponentFixture<CreateFutbolTorunamentAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateFutbolTorunamentAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
