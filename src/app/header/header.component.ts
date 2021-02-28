import { IPlayers } from './../players';

import { CricketService } from './../cricket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  countryList : Array<any>; 
  player_dd: Array<any> = [];
  matches_dd: Array<any> = [];
  headerContents: Array<any> = [];

  constructor(private _cricketService : CricketService) {
    this.countryList = new Array<any>();
  }

  ngOnInit(): void {
    this._cricketService.getCoutnryName()
      .subscribe(data => this.countryList = data);    
    
    this._cricketService.getPlayers_dd()
      .subscribe(data => this.player_dd = data);

    this._cricketService.getMatches_dd()
      .subscribe(data => this.matches_dd = data);

    this._cricketService.getHeaderContents()
      .subscribe(data => this.headerContents = data);
  }

}
