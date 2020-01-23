import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {

  @Input() match;
  minimized = true;
  playerInfo: Map<number, { 'sName': string, 'fName': string }>;
  battingColumns = ['playerid', 'runs', 'balls'];
  bowlingColumns = ['playerid', 'overs', 'bowlruns', 'wickets'];
  teams = [];
  battingDataSource01 = new MatTableDataSource();
  // battingDataSource02 = new MatTableDataSource();
  bowlingDataSource01 = new MatTableDataSource();
  onlyInLowerRes = false;
  tabIndex = 0;
  bowlerFlex = 100;
  constructor() {
    if (window.innerWidth > 800) {
      this.battingColumns.splice(1, 0, 'mod');
      this.bowlerFlex = 50;
    } else {
      this.onlyInLowerRes = true;
    }
    if (window.innerWidth > 500) {
      this.bowlingColumns.push('econ');
    }
    if (window.innerWidth > 700) {
      this.battingColumns.push('strikerate');
      this.battingColumns.push('fours');
      this.battingColumns.push('sixes');
      this.bowlingColumns.push('dots');
    }

    this.playerInfo = new Map();
  }

  ngOnInit() {
    this.battingDataSource01.data = Object.create(this.match.innings[0].scorecard.battingStats);
    this.battingDataSource01.data.push({ 'playerId': 'TOTAL', 'r': this.match.innings[this.tabIndex].scorecard.runs });
    // this.battingDataSource02.data = this.match.score.innings[1].scorecard.battingStats;
    this.bowlingDataSource01.data = this.match.innings[0].scorecard.bowlingStats;
    this.teams.push(this.match.matchInfo.teams[this.match.matchInfo.battingOrder[0]].team.abbreviation);
    this.teams.push(this.match.matchInfo.teams[this.match.matchInfo.battingOrder[1]].team.abbreviation);
    console.log(this.match);
    this.match.matchInfo.teams[0].players.forEach((player) => {
      this.playerInfo.set(player.id, { sName: player.shortName, fName: player.fullName });
    });
    this.match.matchInfo.teams[1].players.forEach((player) => {
      this.playerInfo.set(player.id, { sName: player.shortName, fName: player.fullName });
    });
  }

  getPlayer(id) {
    const player = this.playerInfo.get(id);
    return player === undefined ? id : window.innerWidth < 800 ? player.sName : player.fName;
  }

  getStatus(element) {
    if (element.playerId === 'TOTAL') {
      return ('( ' + this.match.innings[this.tabIndex].scorecard.wkts + ' wickets, '
        + this.match.innings[this.tabIndex].overProgress + ' overs )');
    }
    if (element.mod !== undefined && element.mod.isOut === true) {
      return element.mod.text;
    } else {
      return 'NOT OUT';
    }
  }

  getDidNotBatYet() {
    const battingArray = [];
    this.match.innings[this.tabIndex].scorecard.battingStats.forEach(player => {
      battingArray.push(player.playerId);
    });
    const teamIndex = this.match.matchInfo.battingOrder.indexOf(this.tabIndex);
    const teamArray = [];
    this.match.matchInfo.teams[teamIndex].players.forEach(player => {
      teamArray.push(player.id);
    });

    const didNotBatArray = [];
    teamArray.forEach(player => {
      if (battingArray.indexOf(player) === -1) {
        didNotBatArray.push(this.getPlayer(player));
      }
    });

    return didNotBatArray.join(', ');
  }

  changeTab() {
    console.log(this.tabIndex);
    if (this.tabIndex !== 2) {
      console.log('Inside Change Tab');
      this.battingDataSource01.data = [];
      const newData = Object.create(this.match.innings[this.tabIndex].scorecard.battingStats);
      newData.push({ 'playerId': 'TOTAL', 'r': this.match.innings[this.tabIndex].scorecard.runs });
      this.battingDataSource01.data = newData;
      // this.battingDataSource02.data = this.match.score.innings[1].scorecard.battingStats;
      this.bowlingDataSource01.data = this.match.innings[this.tabIndex].scorecard.bowlingStats;
    }
  }

}
