import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import Routers from './routing';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*import * as prime from '../../node_modules/primeflex/primeflex.css';*/
/*import * as prime from '~/node_modules/primeflex/primeflex.scss/primeflex.css';*/

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponent } from './movie/movie.component';
import { ActorComponent } from './actor/actor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { DetailMovieComponent } from './movie/detail-movie/detail-movie.component';
import { DetailActorComponent } from './actor/detail-actor/detail-actor.component';
import { TablePracticeComponent } from './table-practice/table-practice.component';
import { FilterTablePracticeComponent } from './table-practice/filter-table-practice/filter-table-practice.component';
import { CreateActorsComponent } from './actor/create-actors/create-actors.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';




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
    TablePracticeComponent,
    FilterTablePracticeComponent,
    CreateActorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routers),
    SweetAlert2Module.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  entryComponents: [
    CreateActorsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
