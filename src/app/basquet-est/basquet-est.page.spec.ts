import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BasquetEstPage } from './basquet-est.page';

describe('BasquetEstPage', () => {
  let component: BasquetEstPage;
  let fixture: ComponentFixture<BasquetEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasquetEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
