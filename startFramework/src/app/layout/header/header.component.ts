import { Component } from '@angular/core';
import { NavLink } from 'src/app/interfaces/nav-link';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    navLinks: NavLink[] = [
        { title: 'Home', path: 'home' },
        { title: 'About', path: 'about' },
        { title: 'Portfolio', path: 'portfolio' },
        { title: 'Contact', path: 'contact' },
    ]
}
