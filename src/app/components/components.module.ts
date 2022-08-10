import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SingupComponent } from "./singup/singup.component";
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        SingupComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: "project/singup", component: SingupComponent
            },
            {
                path:"project/login", component: LoginComponent
            }
        ])
    ]
})

export class ComponentsModule { }