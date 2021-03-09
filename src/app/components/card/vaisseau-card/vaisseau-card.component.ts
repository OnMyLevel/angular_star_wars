import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';
import { People } from 'src/app/models/people';
import { Vaisseau } from 'src/app/models/vaisseau';
import { FilmsService } from 'src/app/services/films/films.service';
import { PeoplesService } from 'src/app/services/peoples/peoples.service';
import { VaisseauService } from 'src/app/services/vaisseau/vaisseau.service';

@Component({
  selector: 'app-vaisseau-card',
  templateUrl: './vaisseau-card.component.html',
  styleUrls: ['./vaisseau-card.component.css']
})
export class VaisseauCardComponent implements OnInit {
  
  @Input()
  vaisseau: Vaisseau; 

  @Input()
  id: number;
  
  @Input()
  vaisseauList: [];

  pilotes: People[];
  films: Film[];
  pilotesUrl: [];
  filmsUrl: [];

  constructor( private _peopleService:  PeoplesService) { 
  }

  ngOnInit(): void {
    
    this.filmsUrl = this.vaisseau.films;
    this.pilotesUrl = this.vaisseau.pilots;
        
    if(this.filmsUrl.length>0){
        this.recupereIdUrl(this.filmsUrl);
    }

    if(this.pilotesUrl){
      console.log(this.pilotesUrl);
      this.recupereIdUrl(this.pilotesUrl)
    }

    if(this.pilotes){
       for(let i = 0; i< this.pilotes.length; i++){
           this._peopleService.getPeopleDetails(this.pilotesUrl[i]).subscribe(res => {
             this.pilotes[i] = res.results;
        });
      }
    }
  }

  public recupereIdUrl(tabString:string[]){
    console.log(tabString);
      for(let i = 0; i< tabString.length; i++){
        let tmp =  tabString[i]; 
        console.log(tmp);
        tabString[i] = tmp[tmp.length-2];
        if(tmp[tmp.length-3] !== "/"){
          tabString[i] = tmp[tmp.length-3]+tabString[i];
        }
        console.log(tabString[i]);
      }   
  }
  
}
  
