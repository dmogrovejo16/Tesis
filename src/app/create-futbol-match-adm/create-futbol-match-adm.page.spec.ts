import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CreateFutbolMatchAdmPage } from './create-futbol-match-adm.page';

describe('CreateFutbolMatchAdmPage', () => {
  let component: CreateFutbolMatchAdmPage;
  let fixture: ComponentFixture<CreateFutbolMatchAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreateFutbolMatchAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
