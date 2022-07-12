import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MovieModel} from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieList: MovieModel[] = [
    {
      id: 'M1',
      name: 'The Avengers',
      studio: 'Lions Gate',
      poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      actors: ['A1', 'A2']
    },
    {
      id: 'M2',
      name: 'Avengers: Endgame',
      studio: 'Cinematics',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
      actors: ['A1', 'A2', 'A4']
    },
    {
      id: 'M3',
      name: 'Avengers: Infinity War',
      studio: 'Cinematics',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
      actors: ['A1', 'A4']
    },
    {
      id: 'M4',
      name: 'Red CLiff War',
      studio: 'Cinematics',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTcyOTQ3NDA1OV5BMl5BanBnXkFtZTcwMDY3NzM4Mg@@._V1_SX300.jpg',
      actors: ['A1', 'A2', 'A4']
    },
    {
      id: 'M5',
      name: 'Red CLiff War 2',
      studio: 'Zhang Dong Movie',
      poster: 'https://m.media-amazon.com/images/M/MV5BNGExZjRhZjItZjUxMC00MTdiLTg4Y2ItOGM1MjRlYmFiYjY1XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg',
      actors: ['A1', 'A2', 'A4']
    }
  ];

  movieData = new BehaviorSubject<Array<MovieModel>>(this.movieList);
  constructor() {}


}
