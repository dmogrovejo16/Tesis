import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateBasquetMatchAdmPage } from './create-basquet-match-adm.page';

describe('CreateBasquetMatchAdmPage', () => {
  let component: CreateBasquetMatchAdmPage;
  let fixture: ComponentFixture<CreateBasquetMatchAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateBasquetMatchAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
