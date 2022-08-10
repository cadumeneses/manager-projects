import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { BehaviorSubject, Observable } from "rxjs";
import { first, catchError, tap } from "rxjs/operators";

import { User } from "src/app/models/User";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
    providedIn: "root",
})

export class AuthService {

    private authUrl: string = "http://localhost:3000/auth";

    isUserLoggedIn$ = new BehaviorSubject<boolean>(false);

    userId!: Pick<User, "id">;
    
    constructor(private httpClient: HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router ) {}

    singup(user: Omit<User, "id">): Observable<User> {
        return this.httpClient.post<User>(`${this.authUrl}/singup`, user).pipe(
            first(),
            catchError(this.errorHandlerService.handlerError<User>("singup"))
        );
    }

    login(email: Pick<User, "email">, password: Pick<User, "password">): Observable<{ token: string, userId: Pick<User, "id"> }> {
        return this.httpClient.post<any>(`${this.authUrl}/login`, { email, password })
        .pipe(
            first(),
            tap((tokenObject: { token: string, userId: Pick<User, "id"> }) => {
                this.userId = tokenObject.userId;
                localStorage.setItem("token", tokenObject.token);
                this.isUserLoggedIn$.next(true);
                this.router.navigate(["projects"])
            }),
            catchError(this.errorHandlerService.handlerError<{ token: string, userId: Pick<User, "id"> }>("login"))
        )
    }
}