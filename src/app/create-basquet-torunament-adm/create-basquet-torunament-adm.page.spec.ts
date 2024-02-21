import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBasquetTorunamentAdmPage } from './create-basquet-torunament-adm.page';

describe('CreateBasquetTorunamentAdmPage', () => {
  let component: CreateBasquetTorunamentAdmPage;
  let fixture: ComponentFixture<CreateBasquetTorunamentAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateBasquetTorunamentAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
