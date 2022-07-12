import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*import * as prime from '../../node_modules/primeflex/primeflex.css';*/
/*import * as prime from '~/node_modules/primeflex/primeflex.scss/primeflex.css';*/

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailComponent } from './actor/detail/detail.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ActorComponent,
    NavbarComponent,
    DetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
