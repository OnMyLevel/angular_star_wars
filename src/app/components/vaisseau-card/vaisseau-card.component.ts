import { Component, Input, OnInit } from '@angular/core';
import { People } from 'src/app/models/people';
import { Vaisseau } from 'src/app/models/vaisseau';
import { PeopleService } from 'src/app/services/people/people.service';

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
  pilotesUrl: [];

  constructor( private _peopleService:  PeopleService,) { 
  }

  ngOnInit(): void {

    this.pilotesUrl =this.vaisseau.pilots
    console.log(""+this.id);
    console.log(this.pilotesUrl);
    if(this.pilotes){
       for(let i = 0; i< this.pilotes.length; i++){
           console.log(this.pilotes[i]);
           this._peopleService.getPeopleDetails(this.pilotesUrl[i]).subscribe(res => {
             this.pilotes[i] = res.results;
           });
         }
       }
       console.log("LALA");
       console.log(this.pilotes);
   }

  
}
  