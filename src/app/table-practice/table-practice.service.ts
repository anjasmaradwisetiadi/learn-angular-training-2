import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MentorModel} from './table-practice.model';
import {HttpClient} from '@angular/common/http';
/*import * as mentor from '../../assets/data/mentor.json';*/

@Injectable({
  providedIn: 'root'
})
export class TablePracticeService {
  mentorList = require('../data/mentor/mentor.json');

  /*pakai httpclient get*/
  mentorData = new BehaviorSubject<Array<MentorModel>>(this.mentorList);

  constructor(private httpClient: HttpClient) { }

/*  mentorGetList(): Observable<any> {
    return this.httpClient.get('./data/mentor/mentor.json');
  }*/

}
