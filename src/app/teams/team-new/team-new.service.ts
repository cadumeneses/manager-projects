import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../team';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamNewService {
  private teamUrl: string = 'https://api-new-project-manager.herokuapp.com/teams';

  constructor(private httpClient: HttpClient) { }

  save(team: Team): Observable<Team> {
    if (team.id) {
      return this.httpClient.put<Team>(`${this.teamUrl}/${team.id}`, team);
    } else {
      return this.httpClient.post<Team>(`${this.teamUrl}`, team);
    }
  }
}
