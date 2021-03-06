import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';
import { ProjectInfoService } from './project-info.service'

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {

  project!: Project;

  rgForm = this.fb.group({
    id: [0],
    name: ['', Validators.required],
    team: ['',],
    description: ['', Validators.required],
    tasks: this.fb.array([]),
  })

  constructor(private activatedRoute: ActivatedRoute, private projectInfoService: ProjectInfoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.projectInfoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: project => {
        this.project = project
        this.rgForm = this.fb.group({
          id: [this.project.id],
          name: [this.project.name, Validators.required],
          team: [this.project.team,],
          description: [this.project.description, Validators.required],
          tasks: this.fb.array([]),
        })
      },
      error: err => console.log('Error:', err)
    });
  }

  get name() {
    return this.rgForm.get('name')
  }

  get description() {
    return this.rgForm.get('description')
  }

  get team() {
    return this.rgForm.get('team')
  }

  get tasks() {
    return this.rgForm.get('tasks') as FormArray;
  }

  addTasks() {
    const taskFormGroup = this.fb.group({
      nameTask: '',
      member: '',
    })
    this.tasks.push(taskFormGroup)
  }

  deleteTask(indice: number) {
    (
      this.tasks.removeAt(indice)
    )
  }

  save(): void {

    const payLoad = this.rgForm.value;
    this.projectInfoService.save(payLoad as any).subscribe({
      next: project => console.log('Save with sucess', project),
      error: err => console.log('Error:', err)
    });
  }

}
