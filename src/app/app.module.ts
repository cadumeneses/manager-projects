import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectsModule } from "./projects/projects.module";
import { TeamsModule } from './teams/teams.module';
import { ProjectInfoComponent } from './projects/project-info/project-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    TeamsModule,
    CoreModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'projects', pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
