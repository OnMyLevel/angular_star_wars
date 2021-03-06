import { Component, Input, Output } from '@angular/core';
import { VaisseauService } from './services/vaisseau/vaisseau.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'binocular-angular'; // titre de l'application 
 
  @Input()
  vaisseauList: [];

  constructor(private _vaisseauService: VaisseauService) {
    
  }
  ngOnInit() {
  }

}
