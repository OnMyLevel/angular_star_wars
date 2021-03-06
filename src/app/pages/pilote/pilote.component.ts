import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film';
import { People } from 'src/app/models/people';
import { Species } from 'src/app/models/species';
import { Vaisseau } from 'src/app/models/vaisseau';
import { Vehicles } from 'src/app/models/vehicles';
import { FilmsService } from 'src/app/services/films/films.service';
import { PeoplesService } from 'src/app/services/peoples/peoples.service';
import { SpeciesService } from 'src/app/services/species/species.service';
import { VaisseauService } from 'src/app/services/vaisseau/vaisseau.service';
import { VehiclesService } from 'src/app/services/vehicles/vehicles.service';

@Component({
  selector: 'app-pilote',
  templateUrl: './pilote.component.html',
  styleUrls: ['./pilote.component.css']
})
export class PiloteComponent implements OnInit {

  pilote : People;

  films: Film[];
  filmsUrl: [];

  starships: Vaisseau[];
  starshipsUrl: [];

  vehicles: Vehicles[];
  vehiclesUrl: [];

  species: Species[];
  speciesUrl: [];


  constructor(private _peopleService: PeoplesService,
    private router: ActivatedRoute,
    private _filmsService : FilmsService,
    private _vaisseauService : VaisseauService,
    private _speciesService : SpeciesService,
    private _vehiclesService: VehiclesService
    ) { 
    }

  ngOnInit(): void {
    console.log("pilote component");
    this.router.params.subscribe((params) => {
      const id = params['id'];
      console.log(id);
      this._peopleService.getPeopleDetails("https://swapi.dev/api/people/"+id+"/").subscribe(res => {
        console.log(res);
        this.pilote = res;
        this.filmsUrl=res.films;
        this.starshipsUrl=res.starships;
        this.speciesUrl=res.species;
        this.vehiclesUrl=res.vehicles;

        if(this.filmsUrl){
          this.getFilms()
        }

        if(this.starshipsUrl){
          console.log(this.starshipsUrl);
          this.getStarships()
        }

        if(this.filmsUrl){
          this.getFilms()
        }
        
        if(this.starshipsUrl){
          console.log(this.starshipsUrl);
          this.getStarships()
        }
        
      });
    });
  }

  /**
   * getFilms
   */
  public getFilms() {
      for(let i = 0; i< this.filmsUrl.length; i++){
            this._filmsService.getFilmsDetails(this.filmsUrl[i]).subscribe(res => {
              this.films[i] = res.results;
              console.log(res)
          });
   }
  }

  /**
   * getStarships
   */
  public getStarships() {
      for(let i = 0; i< this.starshipsUrl.length; i++){
        this._vaisseauService.getVaisseauDetailsUrl(this.starshipsUrl[i]).subscribe(res => {
          this.starships[i] = res.results;
          console.log(res)
      });
    }
  }

  /**
   * getSpecies for pilote 
   */
   public getSpecies() {
      for(let i = 0; i< this.speciesUrl.length; i++){
        this._speciesService.getSpecieDetails(this.speciesUrl[i]).subscribe(res => {
          this.species[i] = res.results;
          console.log(res)
      });
    }
  }

  /**
   * getVehicles for pilote 
   */
   public getVehicles() {
    for(let i = 0; i< this.vehiclesUrl.length; i++){
      this._vehiclesService.getVehicleDetails(this.vehiclesUrl[i]).subscribe(res => {
        this.vehicles[i] = res.results;
        console.log(res)
    });
  }
}


}
