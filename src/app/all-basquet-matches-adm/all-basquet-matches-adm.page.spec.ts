import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllBasquetMatchesAdmPage } from './all-basquet-matches-adm.page';

describe('AllBasquetMatchesAdmPage', () => {
  let component: AllBasquetMatchesAdmPage;
  let fixture: ComponentFixture<AllBasquetMatchesAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllBasquetMatchesAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
