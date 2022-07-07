import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'src/app/projects/project';
import { Team } from '../team';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamNewService {
  private teamUrl: string = 'http://localhost:3000/teams';
  private projectUrl: string = 'http://localhost:3000/projects';

  constructor(private httpClient: HttpClient) { }

  retrieveAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectUrl);
  }

  save(team: Project): Observable<Team> {
    if (team.id) {
      return this.httpClient.put<Team>(`${this.teamUrl}/${team.id}`, team);
    } else {
      return this.httpClient.post<Team>(`${this.teamUrl}`, team);
    }
  }
}
