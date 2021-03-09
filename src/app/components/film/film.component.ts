import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film';
import { People } from 'src/app/models/people';
import { Species } from 'src/app/models/species';
import { Vaisseau } from 'src/app/models/vaisseau';
import { Vehicles } from 'src/app/models/vehicles';
import { FilmsService } from 'src/app/services/films/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  film : Film;
  filmsUrl: string[];

  starships: Vaisseau[];
  starshipsUrl: [];

  vehicles: Vehicles[];
  vehiclesUrl: [];

  species: Species[];
  speciesUrl: [];

  constructor(private _filmService:FilmsService,
    private router: ActivatedRoute,) { }

  ngOnInit(): void {

    console.log("pilote component");
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._filmService.getFilmsDetails("https://swapi.dev/api/films/"+id+"/").subscribe(res => {
        console.log(res);
        this.film = res;
        
        /*this.filmsUrl=res.films;
        this.starshipsUrl=res.starships;
        this.speciesUrl=res.species;
        this.vehiclesUrl=res.vehicles;*/

        //if(this.filmsUrl.length>0){
          //this.getFilms();
        //}

        /*if(this.starshipsUrl.length>0){
          console.log(this.vehiclesUrl);
          this.getStarships();
        }
        
        if(this.vehiclesUrl.length > 0){
          console.log(this.starshipsUrl);
          this.getVehicles();
        }*/
        
      });
    });
  }

}
