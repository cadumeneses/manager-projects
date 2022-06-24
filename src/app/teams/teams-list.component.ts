import { Component, OnInit } from '@angular/core';
import { Team } from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  filteredTeams: Team[] = [];

  _teams: Team[] = [];

  _filterBy!: string;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.retrieveAll()
  }

  retrieveAll(): void{
    this.teamService.retrieveAll().subscribe({
      next: teams => {
        this._teams = teams;
        this.filteredTeams = this._teams;
      },
      error: err => console.log('Error', err)
    })
  }

  set filter(value: string){
    this._filterBy = value;
    this.filteredTeams = this._teams.filter((team: Team) => team.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  }

}