import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProjectInfoComponent } from "../components/projects/project-info/project-info.component";
import { ProjectsListComponent } from "../components/projects/project-list/projects-list.component";
import { ProjectNewComponent } from "../components/projects/project-new/project-new.component";

@NgModule({
    declarations: [
        ProjectsListComponent,
        ProjectNewComponent,
        ProjectInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: 'projects', component: ProjectsListComponent
            },
            {
                path: 'projects/new', component: ProjectNewComponent
            },
            {
                path: 'projects/info/:id',component: ProjectInfoComponent
            }
        ])
    ]
})

export class ProjectsModule {

}