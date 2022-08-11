import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../../models/Team';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-info',
  templateUrl: './teams-info.component.html',
  styleUrls: ['./teams-info.component.css']
})
export class TeamsInfoComponent implements OnInit {

  team!: Team;

  rgFormTeam!: FormGroup;

  get members(){
    return this.rgFormTeam.get('members') as FormArray;
  }

  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.teamService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: team => {
        this.team = team;
        this.rgFormTeam = this.fb.group({
          id: [this.team.id],
          name: [this.team.name, Validators.required],
        })
        this.rgFormTeam.setControl('members', this.fb.array(this.team.members!.map(({nameMember}) => this.fb.group({
          nameMember
        }))))
      },
      error: err => console.log('Error:', err)
    })
  }

  get name(){
    return this.rgFormTeam.get('name');
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
    const payLoadTeam = this.rgFormTeam.value;
    this.teamService.save(payLoadTeam as any).subscribe({
      next: team => console.log('Save with sucess', team),
      error: err => console.log('Error:', err)
    })
  }

}
