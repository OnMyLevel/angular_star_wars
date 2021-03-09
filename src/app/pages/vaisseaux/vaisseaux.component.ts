import { Component, Input, OnInit, Output } from '@angular/core';
import { VaisseauService } from 'src/app/services/vaisseau/vaisseau.service';

@Component({
  selector: 'app-vaisseaux',
  templateUrl: './vaisseaux.component.html',
  styleUrls: ['./vaisseaux.component.css']
})
export class VaisseauxComponent implements OnInit {
  @Output()
  vaisseauList: [];
  constructor(private _vaisseauService: VaisseauService) { 

    this._vaisseauService.getVaisseaux().subscribe(res => {
      this.vaisseauList = res.results;
      console.log(this.vaisseauList)
    });
    console.log(this.vaisseauList)
  }
  ngOnInit() {
    console.log(this.vaisseauList)
  }

  public searchMethod(){
    
  }
}
