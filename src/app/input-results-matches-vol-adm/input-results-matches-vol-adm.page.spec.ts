import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputResultsMatchesVolAdmPage } from './input-results-matches-vol-adm.page';

describe('InputResultsMatchesVolAdmPage', () => {
  let component: InputResultsMatchesVolAdmPage;
  let fixture: ComponentFixture<InputResultsMatchesVolAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputResultsMatchesVolAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
