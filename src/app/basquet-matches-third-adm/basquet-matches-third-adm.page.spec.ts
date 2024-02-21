import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasquetMatchesThirdAdmPage } from './basquet-matches-third-adm.page';

describe('BasquetMatchesThirdAdmPage', () => {
  let component: BasquetMatchesThirdAdmPage;
  let fixture: ComponentFixture<BasquetMatchesThirdAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasquetMatchesThirdAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
