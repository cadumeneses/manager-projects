import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProjectInfoComponent } from "./project-info/project-info.component";
import { ProjectsListComponent } from "./project-list/projects-list.component";
import { ProjectNewComponent } from "./project-new/project-new.component";

@NgModule({
    declarations: [
        ProjectsListComponent,
        ProjectNewComponent
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
                path: 'projects/info',component: ProjectInfoComponent
            }
        ])
    ]
})

export class ProjectsModule {

}