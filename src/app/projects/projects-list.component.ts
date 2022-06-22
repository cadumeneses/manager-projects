import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  filteredProjects: Project[] = [];

  _projects:  Project[] = [];

  _filterBy!: string;

  constructor(private projectService: ProjectService){}

  ngOnInit(): void {
    this.retrieveAll()
  }

  retrieveAll(): void{
    this.projectService.retrieveAll().subscribe({
      next: projects => {
        this._projects = projects;
        this.filteredProjects = this._projects;
      },
      error: err => console.log('Error', err)
    })
  }

  set filter(value: string){
    this._filterBy = value;
    this.filteredProjects = this._projects.filter((project: Project) => project.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  }

}
