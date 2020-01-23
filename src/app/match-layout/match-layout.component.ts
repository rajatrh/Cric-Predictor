import { Component, OnInit } from '@angular/core';
import { Match } from '../match.data';

@Component({
  selector: 'app-match-layout',
  templateUrl: './match-layout.component.html',
  styleUrls: ['./match-layout.component.css']
})
export class MatchLayoutComponent implements OnInit {
  links = ['RCB vs CSK', 'RCB', 'CSK'];
  //  <span style="font-size: small; font-weight: bold;" > {{ data.entity[0] }} vs { { data.entity[1] } } </span><br>
  // < span style = "font-size: smaller; color: gray;" > {{ data.comparisonBasis }}</span>
  comparsionData = [
    {
      title : 'CSK',
      entity: [{ name: 'Wins', number: '11', color: 'white', backgroundColor: 'green' },
        { name: 'Losses', number: '6', color: 'white', backgroundColor: 'red' }],
      comparisonBasis: 'Record at Chidambaram Stadium',
      conclusion: 'CSK has better win percentage'
    },
    // '#FF3245', '#FDB913'
    {
      title: 'CSK vs RCB',
      entity: [{ name: 'CSK', number: '11', color: 'white', backgroundColor: '#FDB913'},
        { name: 'Innings', number: '18' },
        { name: 'RCB', number: '7', color: 'white', backgroundColor: '#FF3245'}],
      comparisonBasis : 'Wins in Head to Head',
      conclusion: 'CSK has better win percentage'
    },
    {
      title: 'CSK vs RCB',
      entity: [{ name: 'CSK', number: '4', color: 'white', backgroundColor: '#FDB913'},
        { name: 'Innings', number: '6' },
        { name: 'RCB', number: '1', color: 'white', backgroundColor: '#FF3245'}],
      comparisonBasis: 'Wins in Head to Head at Chidambaram Stadium',
      conclusion: 'CSK has better win percentage'
    },
    {
      title: 'CSK',
      entity: [{ name: 'Wins', number: '11', color: 'white', backgroundColor: 'green' },
      { name: 'Losses', number: '6', color: 'white', backgroundColor: 'red' }],
      comparisonBasis: 'Record at Chidambaram Stadium',
      conclusion: 'CSK has better win percentage'
    },
    {
      title: 'Virat Kohli',
      entity: [{ name: 'At M.A Chidambaram', number: '63.7' },
      { name: 'Overall', number: '45.6' }],
      comparisonBasis: 'Batting Averages',
      conclusion: '70% chances that he scores 40+'
    },
  ];


  factsData = [
    {
      title: 'M.A.Chidambaram Stadium',
      entity: { name: 'Runs', number: '135.7'},
      basis: 'Average Score'
    },
    {
      title: 'Virat Kohli',
      entity: { name: 'Runs', number: '45.6' },
      basis: 'Average Score'
    },
  ];

  fixture = new Match();
  activeLink = this.links[0];
  background = '';
  constructor() { }

  ngOnInit() {
  }

}
