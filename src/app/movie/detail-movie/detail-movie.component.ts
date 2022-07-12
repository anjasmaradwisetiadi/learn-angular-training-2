import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {MovieModel} from '../movie.model';
import {ActorModel} from '../../actor/actor.model';
import {MovieService} from '../movie.service';
import {filter, map} from 'rxjs/operators';
import {ActorService} from '../../actor/actor.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit, OnDestroy {
  routeSubscibe: Subscription;
  movieDetailSubscribe: Subscription;
  actorSubscribe: Subscription;
  idMovie: string;
  detailMovie: MovieModel;
  actorList: ActorModel[] = [];
  constructor(
    private actorService: ActorService,
    private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscibe = this.route.params.subscribe((params: Params) => {
      this.idMovie = params.id;
    });

    this.movieDetailSubscribe = this.movieService.movieData
      .pipe(map((items: MovieModel[]) => {
        return items.filter((item: MovieModel) => {
          return item.id === this.idMovie;
        });
      }))
      .subscribe((data: MovieModel[]) => {
        this.detailMovie = data[0];
      });

/*    #tanya filter rxjs*/
/*    this.actorSubscribe = this.actorService.actorData
      .pipe(
        map((items: ActorModel[]) => {
          return this.detailMovie.actors.map((actors: string) => {
            console.log('actors');
            console.log(actors);
            return items.filter((item: ActorModel) => {
              console.log('item actor');
              console.log(item);
              return item.id === actors;
          });
        });
      }))
      .subscribe((data) => {
      console.log('data');
      console.log(data);
    });*/

    this.filterActorList();
  }

  ngOnDestroy(): void{
    this.routeSubscibe.unsubscribe();
    this.movieDetailSubscribe.unsubscribe();
    this.actorSubscribe.unsubscribe();
  }

  filterActorList(): void{
    this.actorSubscribe = this.actorService.actorData.subscribe((data) => {
      data.forEach((items: ActorModel) => {
        this.detailMovie.actors.forEach((actor: string) => {
          if (items.id === actor){
            this.actorList.push(items);
          }
        });
      });
    });
  }
}
