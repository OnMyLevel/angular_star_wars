import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaisseau } from 'src/app/models/vaisseau';
import { VaisseauService } from 'src/app/services/vaisseau/vaisseau.service';

@Component({
  selector: 'app-vaisseau',
  templateUrl: './vaisseau.component.html',
  styleUrls: ['./vaisseau.component.css']
})
export class VaisseauComponent implements OnInit {

  vaisseau : Vaisseau;
  filmsUrl: [];
  peoplesUrl: [];

  constructor(
    private _vaisseauService:VaisseauService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {

    console.log("Vaisseau component");
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._vaisseauService.getVaisseauDetailsUrl("https://swapi.dev/api/starships/"+id+"/").subscribe(res => {
        console.log(res);
        this.vaisseau = res;
        this.filmsUrl = res.films;
        this.peoplesUrl = res.pilots;
        
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
