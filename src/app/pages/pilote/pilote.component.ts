import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/models/people';
import { PeopleService } from 'src/app/services/people/people.service';

@Component({
  selector: 'app-pilote',
  templateUrl: './pilote.component.html',
  styleUrls: ['./pilote.component.css']
})
export class PiloteComponent implements OnInit {
  pilote : People;
  constructor(private _peopleService: PeopleService,
    private router: ActivatedRoute,) { 
      this.router.params.subscribe((params) => {
        const id = params['id'];
        console.log(id);
        this._peopleService.getPeopleDetails("https://swapi.dev/api/people/"+id+"/").subscribe(res => {
          ///this.pilote  = new People();
          this.pilote = res;
          console.log(this.pilote);
          
        });
  
      });
    }

  ngOnInit(): void {
   
  }

}
