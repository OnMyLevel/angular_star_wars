import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/models/planet';
import { PlanetsService } from 'src/app/services/planets/planets.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  planet: Planet;
  filmsUrl: [];
  residentsUrl: [];

  constructor(private _planetService: PlanetsService,
    private router: ActivatedRoute) { }
  
    ngOnInit(): void {
      console.log("Planet component");
      this.router.params.subscribe((params) => {
        const id = params['id'];
        this._planetService.getPlanetDetails("https://swapi.dev/api/planets/"+id+"/").subscribe(res => {
          console.log(res);
          this.planet = res;
          this.filmsUrl=res.films;
          this.residentsUrl=res.residents;
  
          if(this.filmsUrl.length>0){
            this.recupereIdUrl(this.filmsUrl);
          }
  
          if(this.residentsUrl){
            console.log(this.residentsUrl);
            this.recupereIdUrl(this.residentsUrl)
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
