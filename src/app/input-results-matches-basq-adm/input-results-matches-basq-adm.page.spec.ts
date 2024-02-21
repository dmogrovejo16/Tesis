import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputResultsMatchesBasqAdmPage } from './input-results-matches-basq-adm.page';

describe('InputResultsMatchesBasqAdmPage', () => {
  let component: InputResultsMatchesBasqAdmPage;
  let fixture: ComponentFixture<InputResultsMatchesBasqAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputResultsMatchesBasqAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
