import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import Routers from './routing';

/*import * as prime from '../../node_modules/primeflex/primeflex.css';*/
/*import * as prime from '~/node_modules/primeflex/primeflex.scss/primeflex.css';*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { DetailMovieComponent } from './movie/detail-movie/detail-movie.component';
import { DetailActorComponent } from './actor/detail-actor/detail-actor.component';
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ActorComponent,
    NavbarComponent,
    AboutComponent,
    NotFoundComponent,
    HomeComponent,
    DetailMovieComponent,
    DetailActorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routers),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
