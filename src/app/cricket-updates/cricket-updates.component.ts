import { CricketService } from './../cricket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cricket-updates',
  templateUrl: './cricket-updates.component.html',
  styleUrls: ['./cricket-updates.component.css']
})
export class CricketUpdatesComponent implements OnInit {

  cuList : Array<any>[] = [];

  constructor(private _cricketService : CricketService) { }

  ngOnInit(): void {
    this._cricketService.getCricketUpdates()
      .subscribe(data => this.cuList = data);
  }

}
