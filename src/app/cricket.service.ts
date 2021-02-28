import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CricketService {
  
  private url1: string = "/assets/data/players.json";
  private url2: string = "/assets/data/countries.json";
  private url3: string = "/assets/data/countryList.json";
  private url4: string = "/assets/data/teamDetails.json";
  private url5: string = "/assets/data/venue.json";
  private url6: string = "/assets/data/matches.json";
  private url7: string = "/assets/data/result.json";
  private url8: string = "/assets/data/players_dd.json";
  private url9: string = "/assets/data/matches_dd.json";
  private url10: string = "/assets/data/headerContents.json";
  private url11: string = "/assets/data/cricketUpdates.json";
  
  constructor(private _http : HttpClient) { }
  
  // getPlayer() {
  //   return this._http.get<Players[]>(this.url1);
  // }

  getPlayer(): Observable<any>{
    return this._http.get<any>(this.url1);
  }

  getCountry(): Observable<any>{
    return this._http.get<any>(this.url2);
  }

  getCoutnryName() : Observable<any>{
    return this._http.get<any>(this.url3);
  }

  getTeamDetails() : Observable<any>{
    return this._http.get<any>(this.url4);
  }

  getVenues() : Observable<any>{
    return this._http.get<any>(this.url5);
  }

  getMatches() : Observable<any>{
    return this._http.get<any>(this.url6);
  }
  
  getResult() : Observable<any>{
    return this._http.get<any>(this.url7);
  }

  getPlayers_dd() : Observable<any>{
    return this._http.get<any>(this.url8);
  }

  getMatches_dd() : Observable<any>{
    return this._http.get<any>(this.url9);
  }

  getHeaderContents() : Observable<any>{
    return this._http.get<any>(this.url10);
  } 

  getCricketUpdates() : Observable<any>{
    return this._http.get<any>(this.url11);
  }
  
}
