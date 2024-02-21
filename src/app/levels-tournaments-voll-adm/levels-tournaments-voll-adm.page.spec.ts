import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LevelsTournamentsVollAdmPage } from './levels-tournaments-voll-adm.page';

describe('LevelsTournamentsVollAdmPage', () => {
  let component: LevelsTournamentsVollAdmPage;
  let fixture: ComponentFixture<LevelsTournamentsVollAdmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LevelsTournamentsVollAdmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
