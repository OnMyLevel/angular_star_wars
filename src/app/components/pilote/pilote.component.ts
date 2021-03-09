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
  filmsUrl: string[];

  starshipsUrl: [];
  vehiclesUrl: [];
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
      this._peopleService.getPeopleDetails("https://swapi.dev/api/people/"+id+"/").subscribe(res => {
        this.pilote = res;
        this.filmsUrl=res.films;
        this.starshipsUrl=res.starships;
        this.speciesUrl=res.species;
        this.vehiclesUrl=res.vehicles;

        if(this.filmsUrl.length>0){
          this.recupereIdUrl(this.filmsUrl);
        }

        if(this.starshipsUrl.length>0){
          console.log(this.starshipsUrl);
          this.recupereIdUrl(this.starshipsUrl)
        }
        
       /* if(this.vehiclesUrl.length > 0){
          console.log(this.starshipsUrl);
          this.getVehicles();
        }*/
        
      });
    });
  }

  public recupereIdUrl(tabString:string[]){
    console.log(tabString);
      for(let i = 0; i< tabString.length; i++){
        let tmp =  tabString[i]; 
        console.log(tmp)  ;
        tabString[i] = tmp[tmp.length-2];
        console.log(tabString[i]);
      }   
  }

}
