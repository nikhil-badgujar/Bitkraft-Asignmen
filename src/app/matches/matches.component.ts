import { IMatches } from './../matches';
import { CricketService } from './../cricket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matchesList : IMatches[] =[];  

  constructor(private _cricketService : CricketService) {
    this.matchesList = new Array<any>();    
   }

  ngOnInit(): void {
    this._cricketService.getMatches()
      .subscribe(data => this.matchesList = data);
  }

}
