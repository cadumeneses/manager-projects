import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';
import { ProjectNewService } from "./project-new.service";
import { Team } from "src/app/teams/team";
import { FormBuilder, FormArray, Validators } from '@angular/forms';

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

  filteredMembersTeam: Team[] = []

  constructor(private activeRoute: ActivatedRoute, private projectNewService: ProjectNewService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.retrieveAll()
  }

  rgForm = this.fb.group({
    name: ['', Validators.required],
    team: ['',],
    description: ['', Validators.required],
    tasks: this.fb.array([])
  })

  get name(){
    return this.rgForm.get('name')
  }

  get description(){
    return this.rgForm.get('description')
  }

  get team(){
    return this.rgForm.get('team')
  }

  get tasks(){
    return this.rgForm.get('tasks') as FormArray;
  }

  addTasks(){
    const taskFormGroup = this.fb.group({
      nameTask: '',
      member: '',
    })
    this.tasks.push(taskFormGroup)
  }

  deleteTask(indice: number){(
    this.tasks.removeAt(indice)
  )}

  refresh(){
    this.rgForm.patchValue({
      name: '',
      description: '',
      team: ''
    });
    this.tasks.controls.splice(0, this.tasks.length);
  }

  save(): void {
    if(!this.rgForm.valid){
      console.log("Não foi possível cadastrar o projeto porque o cadastro está inválido");
      return;
    }
    const payLoad = this.rgForm.value;
    this.projectNewService.save(payLoad as any).subscribe({
      next: project => console.log('Save Project', project),
      error: err => console.log('Error', err)
    });
  }

  retrieveAll(): void {
    this.projectNewService.retrieveAll().subscribe({
      next: teams => {
        this._teams = teams;
        this.filteredTeams = this._teams;
      },
      error: err => console.log('Error', err)
    })
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredTeams = this._teams.filter((team: Team) => team.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    this.filteredMembersTeam = this.filteredTeams.filter((member: Team) => member.members.indexOf(this._filterBy))
  }
  
}
