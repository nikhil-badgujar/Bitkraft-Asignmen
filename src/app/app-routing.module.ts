import { CricketUpdatesComponent } from './cricket-updates/cricket-updates.component';
import { BatsmanComponent } from './batsman/batsman.component';
import { IndianTeamComponent } from './indian-team/indian-team.component';
import { TournamentScoresComponent } from './tournament-scores/tournament-scores.component';
import { ResultsComponent } from './results/results.component';
import { VenuesComponent } from './venues/venues.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TeamsComponent } from './teams/teams.component';
import { CountriesComponent } from './countries/countries.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {    path: 'cricketUpdates', component: CricketUpdatesComponent  },
  {    path: 'countries', component: CountriesComponent  },
  {    path: 'teams', component: TeamsComponent  },
  {    path: 'players', component: PlayersComponent  },
  {    path: 'matches', component: MatchesComponent  },
  {    path: 'venues', component: VenuesComponent  },
  {    path: 'results', component: ResultsComponent  },
  {    path: 'tournament-scores', component: TournamentScoresComponent  },

  {    path: 'teams/indian-team', component: IndianTeamComponent  },

  {    path: 'players/batsman', component: BatsmanComponent  }    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
