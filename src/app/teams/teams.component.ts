//import { Players } from './../players';
import { CricketService } from './../cricket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teamDetails : Array<any>;
//players : Players[] = [];

  constructor(private _cricketService : CricketService) { 
    this.teamDetails = new Array<any>();
  }

  ngOnInit(): void {
    this._cricketService.getTeamDetails()
      .subscribe(data => this.teamDetails = data);
  }

}
