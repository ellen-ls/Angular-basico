import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-cards',
  templateUrl: './small-cards.component.html',
  styleUrls: ['./small-cards.component.css']
})
export class SmallCardsComponent implements OnInit {
@Input()
photoCover:string=""
@Input()
cardTitle:string=""
@Input()
Id:string="0"
  constructor() { }

  ngOnInit(): void {
  }

}
