import { Injectable } from '@angular/core';
import {ActorModel} from './actor.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actorLIst: ActorModel[] = [
    {
      id: 'A1',
      name: 'Tonny Stark',
      birth: '24 Dec 1966'
    },
    {
      id: 'A2',
      name: 'Mark Rufallo',
      birth: '24 Feb 1969'
    },
    {
      id: 'A3',
      name: 'Chris Hemsworth',
      birth: '24 Agust 1982'
    },
    {
      id: 'A4',
      name: 'Cao Cao Zhuo Lu',
      birth: '24 Dec 1982'
    },
    {
      id: 'A5',
      name: 'John Woo',
      birth: '12 Sep 1984'
    },
  ];

  actorData = new BehaviorSubject<Array<ActorModel>>(this.actorLIst);
  constructor() { }
}
