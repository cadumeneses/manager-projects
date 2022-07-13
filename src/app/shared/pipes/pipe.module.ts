import { NgModule } from "@angular/core";
import { TeamPipe } from "./pipe-team.pipe";

@NgModule({
    declarations:[
        TeamPipe,
    ],
    exports:[
        TeamPipe
    ]

})

export class AppPipeModule {

}