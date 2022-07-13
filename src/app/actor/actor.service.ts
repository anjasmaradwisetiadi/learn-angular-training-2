import { Injectable } from '@angular/core';
import {ActorModel} from './actor.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actorLIst: ActorModel[] = [
    {
      id: 'A1',
      name: 'Tonny Stark',
      birth: new Date(1963, 12, 24),
      civility: 'Mr',
      first_name: 'Tonny',
      last_name: 'Stark',
      gender: 'male'
    },
    {
      id: 'A2',
      name: 'Mark Rufallo',
      birth: new Date(1961, 2, 24),
      civility: 'Mr',
      first_name: 'Mark',
      last_name: 'Rufallo',
      gender: 'male'
    },
    {
      id: 'A3',
      name: 'Chris Hemsworth',
      birth: new Date(1982, 8, 24),
      civility: 'Mr',
      first_name: 'Chris',
      last_name: 'Hemsworth',
      gender: 'male'
    },
    {
      id: 'A4',
      name: 'Cao Cao Zhuo Lu',
      birth: new Date(1971, 2, 19),
      civility: 'Mr',
      first_name: 'Cao',
      last_name: 'Zhuo Lu',
      gender: 'male'
    },
    {
      id: 'A5',
      name: 'John Woo',
      birth: new Date(1986, 1, 28),
      civility: 'Mr',
      first_name: 'John',
      last_name: 'Woo',
      gender: 'male'
    },
  ];

  actorData = new BehaviorSubject<Array<ActorModel>>(this.actorLIst);
  constructor() { }

  addActors(status: string, params: ActorModel): void{
      if (status === 'successfull'){
        this.actorLIst.push(params);
        this.actorData.next(this.actorLIst.slice());
      }else if (status === 'failed'){
        this.actorData.error('Your Failed Save Data!');
      }
  }
}
