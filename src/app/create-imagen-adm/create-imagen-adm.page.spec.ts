import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateImagenAdmPage } from './create-imagen-adm.page';

describe('CreateImagenAdmPage', () => {
  let component: CreateImagenAdmPage;
  let fixture: ComponentFixture<CreateImagenAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateImagenAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
