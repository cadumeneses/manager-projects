import { Project } from "./project";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    private projectUrl: string = 'http://localhost:3000/';

    constructor(private httpClient: HttpClient){ }

    retrieveAll(): Observable<Project[]> {
        return this.httpClient.get<Project[]>(this.projectUrl);
    }

    retrieveById(id: number): Observable<Project> {
        return this.httpClient.get<Project>(`${this.projectUrl}/${id}`);
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