import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        NavBarComponent,
        FooterComponent
    ]
})

export class CoreModule{

}