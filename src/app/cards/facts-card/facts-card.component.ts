import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-facts-card',
  templateUrl: './facts-card.component.html',
  styleUrls: ['./facts-card.component.css']
})
export class FactsCardComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
