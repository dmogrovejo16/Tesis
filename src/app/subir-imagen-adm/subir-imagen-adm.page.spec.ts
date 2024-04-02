import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirImagenAdmPage } from './subir-imagen-adm.page';

describe('SubirImagenAdmPage', () => {
  let component: SubirImagenAdmPage;
  let fixture: ComponentFixture<SubirImagenAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubirImagenAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
