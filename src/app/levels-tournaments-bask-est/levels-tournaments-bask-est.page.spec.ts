import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelsTournamentsBaskEstPage } from './levels-tournaments-bask-est.page';

describe('LevelsTournamentsBaskEstPage', () => {
  let component: LevelsTournamentsBaskEstPage;
  let fixture: ComponentFixture<LevelsTournamentsBaskEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LevelsTournamentsBaskEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
