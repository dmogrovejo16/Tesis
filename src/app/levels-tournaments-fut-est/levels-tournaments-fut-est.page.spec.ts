import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelsTournamentsFutEstPage } from './levels-tournaments-fut-est.page';

describe('LevelsTournamentsFutEstPage', () => {
  let component: LevelsTournamentsFutEstPage;
  let fixture: ComponentFixture<LevelsTournamentsFutEstPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LevelsTournamentsFutEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
