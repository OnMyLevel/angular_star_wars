import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
 
  @Output() @Input()
  vaisseauList: [];
  constructor() { }

  ngOnInit(): void {
  }

}
