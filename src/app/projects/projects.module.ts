import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
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
        RouterModule.forChild([
              {
                path: 'projects', component:   ProjectsListComponent
              },
              {
                  path: 'projects/new', component: ProjectNewComponent
              }           
         ])
    ]
})

export class ProjectsModule { 

}