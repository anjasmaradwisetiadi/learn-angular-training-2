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

    this.actorSubscribe = this.filterActorList();

/*    #tanya filter rxjs*/
/*
    this.actorSubscribe = this.actorService.actorData
      .pipe(
        map((items: ActorModel[]) => {
          return this.detailMovie.actors.map((actors: string) => {
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
    });
*/

  }

  ngOnDestroy(): void{
    this.routeSubscibe.unsubscribe();
    this.movieDetailSubscribe.unsubscribe();
    this.actorSubscribe.unsubscribe();
  }

  filterActorList(): Subscription{
    return this.actorService.actorData.subscribe((data) => {
      data.forEach((items: ActorModel) => {
        this.detailMovie.actors.forEach((actor: string) => {
          if (items.id === actor){
            this.actorList.push(items);
            console.log('this.actorList');
            console.log(this.actorList);
          }
        });
      });
    });

  }
}
