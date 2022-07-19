import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../team';

@Injectable({
  providedIn: 'root'
})
export class TeamsInfoService {

  private teamUrl: string = 'http://localhost:3000/teams'

  constructor(private httpClient: HttpClient) { }

  save(team: Team): Observable<Team>{
    if(team.id){
      return this.httpClient.put<Team>(`${this.teamUrl}/${team.id}`, team);
    }else{
      return this.httpClient.post<Team>(`${this.teamUrl}`, team);
    }
  }

  retrieveById(id: number): Observable<Team>{
    return this.httpClient.get<Team>(`${this.teamUrl}/${id}`)
  }
}
