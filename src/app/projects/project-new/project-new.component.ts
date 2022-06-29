import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';
import { ProjectNewService } from "./project-new.service";
import { Team } from "src/app/teams/team";

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {

  filteredTeams: Team[] = [];

  _teams: Team[] = [];

  _filterBy!: string;

  project: Project = new Project()

  show: boolean = false

  constructor(private activeRoute: ActivatedRoute, private projectNewService: ProjectNewService) { }

  ngOnInit(): void {
    this.retrieveAll()
  }

  save(): void{
    this.projectNewService.save(this.project).subscribe({
      next: project => console.log('Save Project', project),
      error: err => console.log('Error', err)
    });
  }

  retrieveAll(): void{
    this.projectNewService.retrieveAll().subscribe({
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

  mostrar(){
    this.show = !this.show
  }

}
