import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { first, catchError } from "rxjs/operators";

import { User } from "src/app/models/User";
import { ErrorHandlerService } from "./error-handler.service";

@Injectable({
    providedIn: "root",
})

export class AuthService {

    private signupUrl: string = "http://localhost:3000/auth/singup";
    
    constructor(private httpClient: HttpClient, private errorHandlerService: ErrorHandlerService ) {}

    singup(user: Omit<User, "id">): Observable<User> {
        return this.httpClient.post<User>(this.signupUrl, user).pipe(
            first(),
            catchError(this.errorHandlerService.handlerError<User>("singup"))
        )
    }
}