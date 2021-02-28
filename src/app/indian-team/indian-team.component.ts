import { CricketService } from './../cricket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indian-team',
  templateUrl: './indian-team.component.html',
  styleUrls: ['./indian-team.component.css']
})
export class IndianTeamComponent implements OnInit {

  playerNameImg : Array<any>;

  constructor(private _crickateService : CricketService) { 
    this.playerNameImg = new Array<any>();
  }

  ngOnInit(): void {
    this._crickateService.getPlayer()
      .subscribe(data => this.playerNameImg = data);
  }

}
