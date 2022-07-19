import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppPipeModule } from "../shared/pipes/pipe.module";
import { TeamNewComponent    } from "./team-new/team-new.component";
import { TeamsListComponent } from "./team-list/teams-list.component";
import { TeamsInfoComponent } from './teams-info/teams-info.component';

@NgModule({
    declarations: [
        TeamsListComponent,
        TeamNewComponent,
        TeamsInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppPipeModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path:'teams', component: TeamsListComponent
            },
            {
                path:'teams/new', component: TeamNewComponent
            },
            {
                path:'teams/info/:id', component: TeamsInfoComponent
            }
        ])
    ]
})

export class TeamsModule{

}