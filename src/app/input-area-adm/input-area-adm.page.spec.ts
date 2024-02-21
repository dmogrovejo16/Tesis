import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputAreaAdmPage } from './input-area-adm.page';

describe('InputAreaAdmPage', () => {
  let component: InputAreaAdmPage;
  let fixture: ComponentFixture<InputAreaAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputAreaAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
