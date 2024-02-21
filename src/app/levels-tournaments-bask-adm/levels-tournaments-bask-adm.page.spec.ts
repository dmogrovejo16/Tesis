import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { LevelsTournamentsBaskAdmPage } from './levels-tournaments-bask-adm.page';

describe('LevelsTournamentsBaskAdmPage', () => {
  let component: LevelsTournamentsBaskAdmPage;
  let fixture: ComponentFixture<LevelsTournamentsBaskAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LevelsTournamentsBaskAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
