import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasquetMatchesSecondAdmPage } from './basquet-matches-second-adm.page';

describe('BasquetMatchesSecondAdmPage', () => {
  let component: BasquetMatchesSecondAdmPage;
  let fixture: ComponentFixture<BasquetMatchesSecondAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasquetMatchesSecondAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
