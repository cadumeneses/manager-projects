import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../project";

@Injectable({
    providedIn: 'root'
})

export class ProjectInfoService {
    
    private projectUrl: string = 'https://api-new-project-manager.herokuapp.com/projects';

    constructor(private httpClient: HttpClient) { }

    save(project: Project): Observable<Project> {
        if (project.id) {
            return this.httpClient.put<Project>(`${this.projectUrl}/${project.id}`, project);
        }else{
            return this.httpClient.post<Project>(`${this.projectUrl}`, project);
        }
    }

    retrieveById(id: number): Observable<Project> {
        return this.httpClient.get<Project>(`${this.projectUrl}/${id}`);
    }
}