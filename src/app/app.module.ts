import {BrowserModule}				from '@angular/platform-browser';
import {NgModule}					from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here
import {BrowserAnimationsModule}	from '@angular/platform-browser/animations';
import {HttpModule}					from '@angular/http';
/*import {RouterModule}              from '@angular/router';*/

import {
    MdListModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdGridListModule,
    MdAutocompleteModule
} from '@angular/material';

// Every component must be declared in one—and ONLY one—NgModule

import {AppComponent}           from './app.component';
import {HeroDetailComponent}    from './hero-detail.component';
import {HeroesComponent}        from './heroes.component';
import {DashboardComponent}     from './dashboard.component';
import {HeroService}            from './hero.service';
import {AppRoutingModule}       from './app-routing.module';
import {HeroSearchComponent}	from './hero-search.component';


// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule}	from 'angular-in-memory-web-api'; /* <-- intercept Http requests to simulate remote server */
import {InMemoryDataService}	from './in-memory-data.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    imports: [
        BrowserModule,
        MdListModule,
        MdIconModule,
        MdInputModule,
        MdButtonModule,
        MdProgressSpinnerModule,
        BrowserAnimationsModule,
        MdGridListModule,
        MdAutocompleteModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService), /* <-- replacing the Http client's XHR backend service with an in-memory alternative.*/
        FormsModule, /* <-- import FormsModule before binding with [(ngModel)] */
        ReactiveFormsModule,
        /*MaterialModule,*/
        AppRoutingModule /* <-- routes are now externalized */
        /*RouterModule.forRoot([
          {path: 'heroes', component: HeroesComponent},
          {path: 'dashboard', component: DashboardComponent},
          {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
          {path: 'detail/:id', component: HeroDetailComponent}
        ])*/
    ],
    providers: [
        HeroService  /* <-- singleton service available for all components */
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
