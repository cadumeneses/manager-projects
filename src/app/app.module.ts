import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './modules/components.module';
import { CoreModule } from './core/core.module';
import { Error404Component } from './pages/error-404/error-404.component';
import { ProjectsModule } from "./modules/projects.module";
import { TeamsModule } from './modules/teams.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsModule,
    TeamsModule,
    CoreModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'projects', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
