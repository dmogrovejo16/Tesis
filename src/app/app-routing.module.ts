import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnimationController } from '@ionic/angular';
const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  
  {
    path: 'futbol-est',
    loadChildren: () => import('./futbol-est/futbol-est.module').then( m => m.FutbolEstPageModule)
  },
  {
    path: 'basquet-est',
    loadChildren: () => import('./basquet-est/basquet-est.module').then( m => m.BasquetEstPageModule)
  },
  {
    path: 'volley-est',
    loadChildren: () => import('./volley-est/volley-est.module').then( m => m.VolleyEstPageModule)
  },
  {
    path: 'volley-adm',
    loadChildren: () => import('./volley-adm/volley-adm.module').then( m => m.VolleyAdmPageModule)
  },
  {
    path: 'futbol-adm',
    loadChildren: () => import('./futbol-adm/futbol-adm.module').then( m => m.FutbolAdmPageModule)
  },
  {
    path: 'basquet-adm',
    loadChildren: () => import('./basquet-adm/basquet-adm.module').then( m => m.BasquetAdmPageModule)
  },
  {
    path: 'home-adm',
    loadChildren: () => import('./home-adm/home-adm.module').then( m => m.HomeAdmPageModule),data: { animation: 'pagina1' }
  },
  {
    path: 'home-est',
    loadChildren: () => import('./home-est/home-est.module').then( m => m.HomeEstPageModule)
  },
  {
    path: 'create-basquet-torunament-adm',
    loadChildren: () => import('./create-basquet-torunament-adm/create-basquet-torunament-adm.module').then( m => m.CreateBasquetTorunamentAdmPageModule)
  },
  {
    path: 'create-futbol-torunament-adm',
    loadChildren: () => import('./create-futbol-torunament-adm/create-futbol-torunament-adm.module').then( m => m.CreateFutbolTorunamentAdmPageModule)
  },
  {
    path: 'create-volley-torunament-adm',
    loadChildren: () => import('./create-volley-torunament-adm/create-volley-torunament-adm.module').then( m => m.CreateVolleyTorunamentAdmPageModule)
  },
  {
    path: 'create-volley-match-adm',
    loadChildren: () => import('./create-volley-match-adm/create-volley-match-adm.module').then( m => m.CreateVolleyMatchAdmPageModule)
  },
  {
    path: 'create-futbol-match-adm',
    loadChildren: () => import('./create-futbol-match-adm/create-futbol-match-adm.module').then( m => m.CreateFutbolMatchAdmPageModule)
  },
  {
    path: 'create-basquet-match-adm',
    loadChildren: () => import('./create-basquet-match-adm/create-basquet-match-adm.module').then( m => m.CreateBasquetMatchAdmPageModule)
  },
  {
    path: 'basquet-matches-adm',
    loadChildren: () => import('./basquet-matches-adm/basquet-matches-adm.module').then( m => m.BasquetMatchesAdmPageModule)
  },
  {
    path: 'futbol-matches-adm',
    loadChildren: () => import('./futbol-matches-adm/futbol-matches-adm.module').then( m => m.FutbolMatchesAdmPageModule)
  },
  {
    path: 'volley-matches-adm',
    loadChildren: () => import('./volley-matches-adm/volley-matches-adm.module').then( m => m.VolleyMatchesAdmPageModule)
  },
  {
    path: 'volley-matches-est',
    loadChildren: () => import('./volley-matches-est/volley-matches-est.module').then( m => m.VolleyMatchesEstPageModule)
  },
  {
    path: 'futbol-matches-est',
    loadChildren: () => import('./futbol-matches-est/futbol-matches-est.module').then( m => m.FutbolMatchesEstPageModule)
  },
  {
    path: 'basquet-matches-est',
    loadChildren: () => import('./basquet-matches-est/basquet-matches-est.module').then( m => m.BasquetMatchesEstPageModule)
  },
  {
    path: 'profile-est',
    loadChildren: () => import('./profile-est/profile-est.module').then( m => m.ProfileEstPageModule)
  },
  {
    path: 'profile-adm',
    loadChildren: () => import('./profile-adm/profile-adm.module').then( m => m.ProfileAdmPageModule)
  },
  {
    path: 'levels-tournaments-fut-adm',
    loadChildren: () => import('./levels-tournaments-fut-adm/levels-tournaments-fut-adm.module').then( m => m.LevelsTournamentsFutAdmPageModule)
  },
  {
    path: 'levels-tournaments-fut-est',
    loadChildren: () => import('./levels-tournaments-fut-est/levels-tournaments-fut-est.module').then( m => m.LevelsTournamentsFutEstPageModule)
  },
  {
    path: 'levels-tournaments-bask-est',
    loadChildren: () => import('./levels-tournaments-bask-est/levels-tournaments-bask-est.module').then( m => m.LevelsTournamentsBaskEstPageModule)
  },
  {
    path: 'levels-tournaments-bask-adm',
    loadChildren: () => import('./levels-tournaments-bask-adm/levels-tournaments-bask-adm.module').then( m => m.LevelsTournamentsBaskAdmPageModule)
  },
  {
    path: 'levels-tournaments-voll-adm',
    loadChildren: () => import('./levels-tournaments-voll-adm/levels-tournaments-voll-adm.module').then( m => m.LevelsTournamentsVollAdmPageModule)
  },
  {
    path: 'levels-tournaments-voll-est',
    loadChildren: () => import('./levels-tournaments-voll-est/levels-tournaments-voll-est.module').then( m => m.LevelsTournamentsVollEstPageModule)
  },
  {
    path: 'input-results-matches-fut-adm',
    loadChildren: () => import('./input-results-matches-fut-adm/input-results-matches-fut-adm.module').then( m => m.InputResultsMatchesFutAdmPageModule)
  },
  {
    path: 'input-results-matches-basq-adm',
    loadChildren: () => import('./input-results-matches-basq-adm/input-results-matches-basq-adm.module').then( m => m.InputResultsMatchesBasqAdmPageModule)
  },
  {
    path: 'input-results-matches-vol-adm',
    loadChildren: () => import('./input-results-matches-vol-adm/input-results-matches-vol-adm.module').then( m => m.InputResultsMatchesVolAdmPageModule)
  },
  {
    path: 'futbol-matches-second-adm',
    loadChildren: () => import('./futbol-matches-second-adm/futbol-matches-second-adm.module').then( m => m.FutbolMatchesSecondAdmPageModule)
  },
  {
    path: 'futbol-matches-second-est',
    loadChildren: () => import('./futbol-matches-second-est/futbol-matches-second-est.module').then( m => m.FutbolMatchesSecondEstPageModule)
  },
  {
    path: 'futbol-matches-third-adm',
    loadChildren: () => import('./futbol-matches-third-adm/futbol-matches-third-adm.module').then( m => m.FutbolMatchesThirdAdmPageModule)
  },
  {
    path: 'futbol-matches-third-est',
    loadChildren: () => import('./futbol-matches-third-est/futbol-matches-third-est.module').then( m => m.FutbolMatchesThirdEstPageModule)
  },
  {
    path: 'basquet-matches-second-adm',
    loadChildren: () => import('./basquet-matches-second-adm/basquet-matches-second-adm.module').then( m => m.BasquetMatchesSecondAdmPageModule)
  },
  {
    path: 'basquet-matches-second-est',
    loadChildren: () => import('./basquet-matches-second-est/basquet-matches-second-est.module').then( m => m.BasquetMatchesSecondEstPageModule)
  },
  {
    path: 'basquet-matches-third-adm',
    loadChildren: () => import('./basquet-matches-third-adm/basquet-matches-third-adm.module').then( m => m.BasquetMatchesThirdAdmPageModule)
  },
  {
    path: 'basquet-matches-third-est',
    loadChildren: () => import('./basquet-matches-third-est/basquet-matches-third-est.module').then( m => m.BasquetMatchesThirdEstPageModule)
  },
  {
    path: 'volley-matches-second-adm',
    loadChildren: () => import('./volley-matches-second-adm/volley-matches-second-adm.module').then( m => m.VolleyMatchesSecondAdmPageModule)
  },
  {
    path: 'volley-matches-second-est',
    loadChildren: () => import('./volley-matches-second-est/volley-matches-second-est.module').then( m => m.VolleyMatchesSecondEstPageModule)
  },
  {
    path: 'volley-matches-third-adm',
    loadChildren: () => import('./volley-matches-third-adm/volley-matches-third-adm.module').then( m => m.VolleyMatchesThirdAdmPageModule)
  },
  {
    path: 'volley-matches-third-est',
    loadChildren: () => import('./volley-matches-third-est/volley-matches-third-est.module').then( m => m.VolleyMatchesThirdEstPageModule)
  },  {
    path: 'input-class-adm',
    loadChildren: () => import('./input-class-adm/input-class-adm.module').then( m => m.InputClassAdmPageModule)
  },
  {
    path: 'input-area-adm',
    loadChildren: () => import('./input-area-adm/input-area-adm.module').then( m => m.InputAreaAdmPageModule)
  },

  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
