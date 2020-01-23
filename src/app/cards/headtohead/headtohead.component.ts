import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headtohead',
  templateUrl: './headtohead.component.html',
  styleUrls: ['./headtohead.component.css']
})
export class HeadtoheadComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
  }

}
