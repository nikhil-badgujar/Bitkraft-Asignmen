import { IPlayers } from '../players';
import { CricketService } from './../cricket.service';
import { Component, OnInit, Pipe } from '@angular/core';
//import * as $ from 'jquery';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: IPlayers[] = [];
  data:Array<any>
  
  constructor(private _cricketService : CricketService) {
    this.data = new Array<any>();
    this.players = new Array<any>();
   }

  ngOnInit() {
    this._cricketService.getPlayer()
      .subscribe(data => this.players = data); 
      
    //   $(document).ready(function() {
    //     (<any>$('#sortTable')).DataTable();
    // } );
  }

  
/*getdata(){
    this._cricketService.getPlayer().subscribe((data) => {
      console.log(data);
    })
  }
*/  

}