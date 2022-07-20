import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Team } from "src/app/teams/team";
import { Project } from "../project";

@Injectable({
    providedIn: 'root'
})

export class ProjectNewService {
    private teamUrl: string = 'https://api-new-project-manager.herokuapp.com/teams';
    private projectUrl: string = 'https://api-new-project-manager.herokuapp.com/projects';

    constructor(private httpClient: HttpClient) { }

    retrieveAll(): Observable<Team[]>{
        return this.httpClient.get<Team[]>(this.teamUrl);
    }

    save(project: Project): Observable<Project> {
        if (project.id) {
            return this.httpClient.put<Project>(`${this.projectUrl}/${project.id}`, project);
        }else{
            return this.httpClient.post<Project>(`${this.projectUrl}`, project);
        }
    }
}