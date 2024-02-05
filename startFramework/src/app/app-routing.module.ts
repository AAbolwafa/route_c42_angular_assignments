import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Start Framework' },
    { path: 'about', component: AboutComponent, title: 'Start Framework - About' },
    { path: 'portfolio', component: PortfolioComponent, title: 'Start Framework - Portfolio' },
    { path: 'contact', component: ContactComponent, title: 'Start Framework - Contact' },
    { path: "**", component: NotFoundComponent, title: 'Start Framework - Page Not Found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: false,
        anchorScrolling: 'enabled',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
