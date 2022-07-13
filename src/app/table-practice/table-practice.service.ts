import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {MentorModel} from './table-practice.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TablePracticeService {

  constructor(private httpClient: HttpClient) { }

  mentorGetList(): Observable<any> {
    return this.httpClient.get<MentorModel[]>('assets/data/mentor.json');
  }
}
