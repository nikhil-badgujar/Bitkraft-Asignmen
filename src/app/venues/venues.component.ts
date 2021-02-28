import { CricketService } from './../cricket.service';
import { IVenue } from './../venue';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.component.html',
  styleUrls: ['./venues.component.css']
})
export class VenuesComponent implements OnInit {

  venueList : IVenue[] = [];
  //data : Array<any>;

  constructor(private _cricletService : CricketService) { 
    //this.data = new Array<any>();
  }

  ngOnInit(): void {
    this._cricletService.getVenues()
      .subscribe(data => this.venueList = data);
  }

}
