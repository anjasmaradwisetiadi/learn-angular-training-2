import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor() { }

  actorLIst = [
    {
      id: 'A1',
      name: 'Tonny Stark'
    },
    {
      id: 'A2',
      name: 'Mark Rufallo'
    },
    {
      id: 'A3',
      name: 'Chris Hemsworth'
    },
    {
      id: 'A4',
      name: 'Cao Cao Zhuo Lu'
    },
    {
      id: 'A5',
      name: 'John Woo'
    },
  ];
}
