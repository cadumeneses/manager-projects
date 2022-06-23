import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.css']
})
export class ProjectNewComponent implements OnInit {


  project: Project = new Project()

  constructor(private activeRoute: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  save(): void{
    this.projectService.save(this.project).subscribe({
      next: project => console.log('Save Project', project),
      error: err => console.log('Error', err)
    });
  }

}
