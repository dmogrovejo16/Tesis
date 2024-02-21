import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputResultsMatchesFutAdmPage } from './input-results-matches-fut-adm.page';

describe('InputResultsMatchesFutAdmPage', () => {
  let component: InputResultsMatchesFutAdmPage;
  let fixture: ComponentFixture<InputResultsMatchesFutAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputResultsMatchesFutAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
