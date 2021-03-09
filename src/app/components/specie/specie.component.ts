import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specie } from 'src/app/models/specie';
import { SpeciesService } from 'src/app/services/species/species.service';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {

  specie: Specie;
  filmsUrl: [];
  peoplesUrl: [];

  constructor(private _specieService: SpeciesService,
  private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Specie component");
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._specieService.getSpecieDetails("https://swapi.dev/api/species/"+id+"/").subscribe(res => {
        console.log(res);
        this.specie = res;
        this.filmsUrl=res.films;
        this.peoplesUrl=res.people;

        if(this.filmsUrl.length>0){
          this.recupereIdUrl(this.filmsUrl);
        }

        if(this.peoplesUrl){
          console.log(this.peoplesUrl);
          this.recupereIdUrl(this.peoplesUrl)
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
