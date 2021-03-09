import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film';
import { People } from 'src/app/models/people';
import { Specie } from 'src/app/models/specie';
import { Vaisseau } from 'src/app/models/vaisseau';
import { Vehicle } from 'src/app/models/vehicle';
import { FilmsService } from 'src/app/services/films/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film : Film;
  starshipsUrl: [];
  peoplesUrl: [];
  speciesUrl: [];
  vehiclesUrl: [];
  planetsUrl:[];

  constructor(private _filmService:FilmsService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {

    console.log("pilote component");
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._filmService.getFilmsDetails("https://swapi.dev/api/films/"+id+"/").subscribe(res => {
        console.log(res);
        this.film = res;
        this.peoplesUrl = res.characters;
        this.speciesUrl = res.species;
        this.starshipsUrl = res.startships;
        this.vehiclesUrl = res.vehicles;
        this.planetsUrl = res.planets;
        
        if(this.starshipsUrl){
          console.log(this.starshipsUrl);
          this.recupereIdUrl(this.starshipsUrl);
        }
        
        if(this.speciesUrl){
          console.log(this.speciesUrl);
          this.recupereIdUrl(this.speciesUrl);
        }

        if(this.peoplesUrl){
          console.log(this.peoplesUrl);
          this.recupereIdUrl(this.peoplesUrl);
        }

        if(this.vehiclesUrl){
          console.log(this.vehiclesUrl);
          this.recupereIdUrl(this.vehiclesUrl);
        }

        if(this.planetsUrl){
          console.log(this.planetsUrl);
          this.recupereIdUrl(this.planetsUrl);
        }
        
      });
    });
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
