import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TeamsListComponent } from "./teams-list.component";

@NgModule({
    declarations: [
        TeamsListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path:'teams', component: TeamsListComponent
            },
        ])
    ]
})

export class TeamsModule{

}