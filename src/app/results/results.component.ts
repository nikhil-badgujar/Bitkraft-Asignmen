import { CricketService } from './../cricket.service';
import { IResult } from './../result';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  resultList : IResult[] = [];

  constructor(private _cricketService: CricketService) { }

  ngOnInit(): void {
    this._cricketService.getResult()
      .subscribe(data => this.resultList = data);
  }

}
