import {BrowserModule}             from '@angular/platform-browser';
import {NgModule}                  from '@angular/core';
import {FormsModule}               from '@angular/forms'; // <-- NgModel lives here
import {BrowserAnimationsModule}   from '@angular/platform-browser/animations';
/*import {RouterModule}              from '@angular/router';*/
import {
    MdListModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule,
    MdProgressSpinnerModule,
    MdGridListModule
} from '@angular/material';

// Every component must be declared in one—and ONLY one—NgModule

import {AppComponent}           from './app.component';
import {HeroDetailComponent}    from './hero-detail.component';
import {HeroesComponent}        from './heroes.component';
import {DashboardComponent}     from './dashboard.component';
import {HeroService}            from './hero.service';
import {AppRoutingModule}       from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
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
        FormsModule,     /* <-- import FormsModule before binding with [(ngModel)] */
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
