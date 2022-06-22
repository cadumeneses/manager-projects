import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProjectsListComponent } from "./projects-list.component";

@NgModule({
    declarations: [
          ProjectsListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
             {
                path: 'projects', component:   ProjectsListComponent
              },           
         ])
    ]
})

export class ProjectsModule { 

}