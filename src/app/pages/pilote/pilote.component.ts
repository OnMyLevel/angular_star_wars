import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/models/people';
import { FilmsService } from 'src/app/services/films/films.service';
import { PeoplesService } from 'src/app/services/peoples/peoples.service';

@Component({
  selector: 'app-pilote',
  templateUrl: './pilote.component.html',
  styleUrls: ['./pilote.component.css']
})
export class PiloteComponent implements OnInit {
  pilote : People;
  pilotes: Film[];
  filmsUrl: [];
  constructor(private _peopleService: PeoplesService,
    private router: ActivatedRoute,
    private _filmsService : FilmsService
    ) { 
      this.router.params.subscribe((params) => {
        const id = params['id'];
        console.log(id);
        this._peopleService.getPeopleDetails("https://swapi.dev/api/people/"+id+"/").subscribe(res => {
          this.pilote = res;
          console.log(this.pilote);
        });
      });
    }

  ngOnInit(): void {
    console.log("pilote component")
  }

  /**
   * getFilms
   */
  public getFilms() {

    for(let i = 0; i< this.pilote.films.length; i++){
           console.log(this.pilote[i]);
           this._filmsService.getFilmsDetails(this.filmsUrl[i]).subscribe(res => {
             this.pilotes[i] = res.results;
           });
         }
       }
  }

}
