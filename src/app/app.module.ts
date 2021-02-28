import { CricketService } from './cricket.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CountriesComponent } from './countries/countries.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { MatchesComponent } from './matches/matches.component';
import { VenuesComponent } from './venues/venues.component';
import { ResultsComponent } from './results/results.component';
import { TournamentScoresComponent } from './tournament-scores/tournament-scores.component';
import { IndianTeamComponent } from './indian-team/indian-team.component';
import { BatsmanComponent } from './batsman/batsman.component';
import { CricketUpdatesComponent } from './cricket-updates/cricket-updates.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HeaderComponent,
    FooterComponent,
    TeamsComponent,
    PlayersComponent,
    MatchesComponent,
    VenuesComponent,
    ResultsComponent,
    TournamentScoresComponent,
    IndianTeamComponent,
    BatsmanComponent,
    CricketUpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CricketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
