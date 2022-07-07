import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TeamNewComponent } from "./team-new/team-new.component";
import { TeamsListComponent } from "./teams-list.component";

@NgModule({
    declarations: [
        TeamsListComponent,
        TeamNewComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path:'teams', component: TeamsListComponent
            },
            {
                path:'teams/new', component: TeamNewComponent
            }
        ])
    ]
})

export class TeamsModule{

}