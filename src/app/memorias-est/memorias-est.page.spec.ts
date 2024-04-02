import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoriasEstPage } from './memorias-est.page';

describe('MemoriasEstPage', () => {
  let component: MemoriasEstPage;
  let fixture: ComponentFixture<MemoriasEstPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoriasEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
