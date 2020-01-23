import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixtures-layout',
  templateUrl: './fixtures-layout.component.html',
  styleUrls: ['./fixtures-layout.component.css']
})
export class FixturesLayoutComponent implements OnInit {

  fixtures = [{
    league: 'Indian Premiere League 2019',
    teams: ['RCB', 'CSK'],
    primaryColor: ['#FF3245', '#FDB913'],
    timer: '54m 05s left',
    status: [['green', 'red', 'green'], ['red', 'red', 'green']]
  },
  {
    league: 'Indian Premiere League 2019',
    teams: ['MI', 'SRH'],
    primaryColor: ['#00AEEF', '#FF9C00'],
    timer: '21h left',
    status: [['green', 'green', 'green'], ['red', 'orange', 'green']]
  }];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToFixture(fix) {
    this.router.navigate(['/fixture']);
  }

}
