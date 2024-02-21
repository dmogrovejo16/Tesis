import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasquetMatchesAdmPage } from './basquet-matches-adm.page';

describe('BasquetMatchesAdmPage', () => {
  let component: BasquetMatchesAdmPage;
  let fixture: ComponentFixture<BasquetMatchesAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasquetMatchesAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
