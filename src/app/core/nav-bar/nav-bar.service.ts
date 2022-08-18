import {Injectable} from '@angular/core';

export interface NavBar{
    label: string;
    routerLink: string[];
    class: string;
    routerLinkActive: string;
}

@Injectable({
    providedIn: 'root'
})
export class NavBarService{

    constructor() { }

    getNavBar():NavBar[]{
        return [
            {
                label: 'Projetos',
                routerLink: ['/projects'],
                class: 'nav-link primary-color',
                routerLinkActive: 'active'
            },
            {
                label: 'Equipes',
                routerLink: ['/teams'],
                class: 'nav-link primary-color',
                routerLinkActive: 'active'
            },
            {
                label: 'signIn',
                routerLink: ['/project/login'],
                class: 'nav-link primary-color',
                routerLinkActive: 'active'
            },
            {
                label: 'signUp',
                routerLink: ['/project/singup'],
                class: 'nav-link primary-color',
                routerLinkActive: 'active'
            }
        ]
    }

}