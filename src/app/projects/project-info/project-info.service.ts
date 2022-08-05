import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Team } from "src/app/teams/team";
import { Project } from "../project";

@Injectable({
    providedIn: 'root'
})

export class ProjectInfoService {

    private teamUrl: string = 'https://api-new-project-manager.herokuapp.com/teams';

    private projectUrl: string = 'https://api-new-project-manager.herokuapp.com/projects';

    constructor(private httpClient: HttpClient) { }

    save(project: Project): Observable<Project> {
        return this.httpClient.put<Project>(`${this.projectUrl}/${project.id}`, project);
    }

    retrieveById(id: number): Observable<Project> {
        return this.httpClient.get<Project>(`${this.projectUrl}/${id}`);
    }

    retrieveTeamAll(): Observable<Team[]>{
        return this.httpClient.get<Team[]>(this.teamUrl);
    }

}