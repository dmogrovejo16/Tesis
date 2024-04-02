import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoriasAdmPage } from './memorias-adm.page';

describe('MemoriasAdmPage', () => {
  let component: MemoriasAdmPage;
  let fixture: ComponentFixture<MemoriasAdmPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriasAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
