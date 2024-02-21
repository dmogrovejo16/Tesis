import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BasquetAdmPage } from './basquet-adm.page';

describe('BasquetAdmPage', () => {
  let component: BasquetAdmPage;
  let fixture: ComponentFixture<BasquetAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasquetAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
