import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { TeamNewService } from './team-new.service';

@Component({
  selector: 'app-team-new',
  templateUrl: './team-new.component.html',
  styleUrls: ['./team-new.component.css']
})
export class TeamNewComponent implements OnInit {

  constructor(private teamNewService: TeamNewService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  rgFormTeam = this.fb.group({
    name: ['', Validators.required],
    members: this.fb.array([])
  })

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

  refresh(){
    this.rgFormTeam.patchValue({
      name: '',
    });
    this.members.controls.splice(0, this.members.length);
  }

  save(): void{
    if(!this.rgFormTeam.valid){
      console.log('Não foi possível cadastrar a equipe');
      return;
    }
    const payLoad = this.rgFormTeam.value;
    this.teamNewService.save(payLoad as any).subscribe({
      next: team => console.log('Save team', team),
      error: err => console.log('Error', err)
    });
  }

}
