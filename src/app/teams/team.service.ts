import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Team } from "./team";

@Injectable({
    providedIn: 'root'
})

export class TeamService {
    private teamUrl: string = 'http://localhost:3000/';

    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Team[]>{
        return this.httpClient.get<Team[]>(this.teamUrl);
    }

    retrieveById(id: number): Observable<Team> {
        return this.httpClient.get<Team>(`${this.teamUrl}/${id}`);
    }

    save(team: Team): Observable<Team> {
        if(team.id) {
            return this.httpClient.put<Team>(`${this.teamUrl}/${team.id}`, team)
        }else{
            return this.httpClient.put<Team>(`${this.teamUrl}`, team)
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.teamUrl}/${id}`)
    }
}