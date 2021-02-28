import { CricketService } from './../cricket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batsman',
  templateUrl: './batsman.component.html',
  styleUrls: ['./batsman.component.css']
})
export class BatsmanComponent implements OnInit {

  //data : Array<any>;
  batsmanList : Array<any>;
  //temp : Array<any>;

  constructor(private _cricketService: CricketService) { 
    //this.data =new Array<any>();
    this.batsmanList = new Array<any>();
    //this.temp =new Array<any>();
  }

  ngOnInit() {
    this._cricketService.getPlayer()
      .subscribe(data => this.batsmanList = data);
    
    /*
    for(var key in this.batsmanList){
      if(key.valueOf() == "batsman")  
        this.temp.push(this.data);
    }
    console.log(this.temp); 
    */
  } 

}