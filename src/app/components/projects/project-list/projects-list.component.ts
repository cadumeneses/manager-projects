import { Component, OnInit } from '@angular/core';
import { Project } from '../../../models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  filteredProjects: Project[] = [];

  _projects: Project[] = [];

  _filterBy!: string;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.projectService.retrieveAll().subscribe({
      next: projects => {
        this._projects = projects;
        this.filteredProjects = this._projects;
      },
      error: err => console.log('Error', err)
    })
  }

  deleteById(projectId: number): void {
    this.projectService.deleteById(projectId).subscribe({
      next: () => {
        console.log('Deleted with sucess');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    })
  }

  getListOrdered() {
    return this.filteredProjects.sort((a,b) => (a.name < b.name) ? -1 : 1);
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredProjects = this._projects.filter((project: Project) => project.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  }

}
