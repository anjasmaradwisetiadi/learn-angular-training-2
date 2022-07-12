import {Routes} from '@angular/router';
import {NotFoundComponent} from '../components/not-found/not-found.component';
import {HomeComponent} from '../home/home.component';
import {MovieComponent} from '../movie/movie.component';
import {ActorComponent} from '../actor/actor.component';
import {AboutComponent} from '../about/about.component';
import {DetailMovieComponent} from "../movie/detail-movie/detail-movie.component";
const Routers: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'Movie', component: MovieComponent},
  {path: 'Detail-Movie/:id', component: DetailMovieComponent},
  {path: 'Actor', component: ActorComponent},
  {path: 'About', component: AboutComponent},
  {path: '**', component: NotFoundComponent }
];

export default Routers;
