import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/models/vehicle';
import { VehiclesService } from 'src/app/services/vehicles/vehicles.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle : Vehicle;
  filmsUrl: [];
  pilotesUrl: [];

  constructor(private _vehicleService: VehiclesService,
  private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("Vehicle component");
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._vehicleService.getVehicleDetails("https://swapi.dev/api/vehicles/"+id+"/").subscribe(res => {
        console.log(res);
        this.vehicle = res;
        this.filmsUrl=res.films;
        this.pilotesUrl=res.pilots;

        if(this.filmsUrl.length>0){
          this.recupereIdUrl(this.filmsUrl);
        }

        if(this.pilotesUrl){
          console.log(this.pilotesUrl);
          this.recupereIdUrl(this.pilotesUrl)
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
