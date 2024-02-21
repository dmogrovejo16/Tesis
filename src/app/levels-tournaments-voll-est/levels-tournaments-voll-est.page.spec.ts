import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelsTournamentsVollEstPage } from './levels-tournaments-voll-est.page';

describe('LevelsTournamentsVollEstPage', () => {
  let component: LevelsTournamentsVollEstPage;
  let fixture: ComponentFixture<LevelsTournamentsVollEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LevelsTournamentsVollEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
