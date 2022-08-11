import { Project } from "../models/project";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Team } from "../models/team";

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    private projectUrl: string = 'https://api-new-project-manager.herokuapp.com/projects';

    private teamUrl: string = 'https://api-new-project-manager.herokuapp.com/teams';


    constructor(private httpClient: HttpClient){ }

    retrieveAll(): Observable<Project[]> {
        return this.httpClient.get<Project[]>(this.projectUrl);
    }

    retrieveById(id: number): Observable<Project> {
        return this.httpClient.get<Project>(`${this.projectUrl}/${id}`);
    }

    retrieveAllTeam(): Observable<Team[]>{
        return this.httpClient.get<Team[]>(this.teamUrl);
    }

    save(project: Project): Observable<Project> {
        if (project.id) {
            return this.httpClient.put<Project>(`${this.projectUrl}/${project.id}`, project);
        }else{
            return this.httpClient.post<Project>(`${this.projectUrl}`, project);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.projectUrl}/${id}`);
    }

}