import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SingupComponent } from "./singup/singup.component";

@NgModule({
    declarations: [
        SingupComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class ComponentsModule { }