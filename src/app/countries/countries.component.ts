import { CricketService } from './../cricket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countriesList : Array<any>; 
  
  constructor(private _cricketService : CricketService) {
    this.countriesList = new Array<any>();
  }

  ngOnInit(): void {
    this._cricketService.getCountry()
      .subscribe(data =>this.countriesList = data);
  }

}
