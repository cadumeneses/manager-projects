import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/team';
import { Project } from '../../../models/project';
import { ProjectService } from 'src/app/services/project.service'

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})

export class ProjectInfoComponent implements OnInit {

  rgForm!: FormGroup;
  
  project!: Project;

  filteredTeams: Team[] = [];

  _teams: Team[] = [];

  _members: any[] = [];

  get tasks() {
    return this.rgForm.get('tasks') as FormArray;
  }

  constructor(private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private fb: FormBuilder) { }

  ngOnInit(): void {

    this.retrieveTeamAll()
    this.projectService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: project => {
        this.project = project
        this.rgForm = this.fb.group({
          id: [this.project.id],
          name: [this.project.name, Validators.required],
          team: [this.project.team,],
          description: [this.project.description, Validators.required],
        })
        this.rgForm.setControl('tasks', this.fb.array(this.project.tasks!.map(({ nameTask, member }) => this.fb.group({
          nameTask,
          member
        }))))
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

  addTasks() {
    const taskFormGroup = this.fb.group({
      nameTask: '',
      member: '',
    })
    this.tasks.push(taskFormGroup)
  }

  deleteTask(indice: number) {(
    this.tasks.removeAt(indice)
  )}

  save(): void {
    const payLoad = this.rgForm.value;
    this.projectService.save(payLoad as any).subscribe({
      next: project => console.log('Save with sucess', project),
      error: err => console.log('Error:', err)
    });
  }

  retrieveTeamAll(): void {
    this.projectService.retrieveAllTeam().subscribe({
      next: teams => {
        this._teams = teams;
        this.filteredTeams = this._teams;
      },
      error: err => console.log('Error', err)
    })
  }

  retrieveMembers(event: any): void {
    const name = event?.target?.value;
    this._members = this.filteredTeams.filter((team: Team) => {
      return team.name === name;
    })[0].members as any;
  }

}