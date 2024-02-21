import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputClassAdmPage } from './input-class-adm.page';

describe('InputClassAdmPage', () => {
  let component: InputClassAdmPage;
  let fixture: ComponentFixture<InputClassAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputClassAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
