import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../team';
import { TeamsInfoService } from './teams-info.service';

@Component({
  selector: 'app-teams-info',
  templateUrl: './teams-info.component.html',
  styleUrls: ['./teams-info.component.css']
})
export class TeamsInfoComponent implements OnInit {

  team!: Team;

  rgFormTeam = this.fb.group({
    name: ['', Validators.required],
    members: this.fb.array([])
  })

  constructor(private activatedRoute: ActivatedRoute, private teamsInfoService: TeamsInfoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.teamsInfoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: team => {
        this.team = team;
        this.rgFormTeam = this.fb.group({
          name: [this.team.name, Validators.required],
          members: this.fb.array([])
        });
      },
      error: err => console.log('Error:', err)
    })
  }

  get name(){
    return this.rgFormTeam.get('name');
  }

  get members(){
    return this.rgFormTeam.get('members') as FormArray;
  }

  addMembers(){
    const memberFormControl = this.fb.group({
      nameMember: ''
    });
    this.members.push(memberFormControl);
  }

  deleteMember(index: number){
    this.members.removeAt(index);
  }

  save(): void{
    this.teamsInfoService.save(this.team).subscribe({
      next: team => console.log('Save with sucess', team),
      error: err => console.log('Error:', err)
    })
  }

}
