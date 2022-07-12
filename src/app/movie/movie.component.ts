import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {MovieModel} from './movie.model';
import {MovieService} from './movie.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {
  movieCollect: MovieModel[] = [];
  movieDataSubscribe: Subscription;
  constructor(
    private movieService: MovieService,
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.movieDataSubscribe = this.movieService.movieData.subscribe((data: MovieModel[]) => {
      this.movieCollect = data;
    });
  }

  ngOnDestroy(): void{
    this.movieDataSubscribe.unsubscribe();
  }

  handleDetailMovie(id: string): void{
    this.routes.navigate([`/Detail-Movie/${id}`]);
  }

}
