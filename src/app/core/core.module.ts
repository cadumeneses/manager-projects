import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { navBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        navBarComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        navBarComponent
    ]
})

export class CoreModule{

}