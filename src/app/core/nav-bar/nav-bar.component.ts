import { Component } from "@angular/core";
import { NavBarService, NavBar } from "./nav-bar.service";

@Component({
    selector: 'app-nav-bar',
    templateUrl: 'nav-bar.component.html',
    styleUrls: ['nav-bar.component.css']
})

export class NavBarComponent{

    options: NavBar[] = []

    constructor(private navBarService: NavBarService) { }

    ngOnInit(): void {
        this.getNavBar()
    }

    getNavBar(){
        this.options = this.navBarService.getNavBar()
    }
    
}