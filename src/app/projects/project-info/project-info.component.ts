import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';
import { ProjectInfoService } from  './project-info.service'

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  project!: Project;

  constructor(private activatedRoute: ActivatedRoute,private projectInfoService: ProjectInfoService) { }

  ngOnInit(): void {
    this.projectInfoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: project => this.project = project, 
      error: err => console.log('Error:', err)
    });
  }

  save(): void{
    this.projectInfoService.save(this.project).subscribe({
      next: project => console.log('Save with sucess', project),
      error: err => console.log('Error:', err)
    });
  }

}
