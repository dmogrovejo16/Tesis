import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelsTournamentsFutAdmPage } from './levels-tournaments-fut-adm.page';

describe('LevelsTournamentsFutAdmPage', () => {
  let component: LevelsTournamentsFutAdmPage;
  let fixture: ComponentFixture<LevelsTournamentsFutAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LevelsTournamentsFutAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
