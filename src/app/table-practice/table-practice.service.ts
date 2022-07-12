import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MentorModel} from './table-practice.model';
import * as mentor from '../../assets/data/mentor.json';
@Injectable({
  providedIn: 'root'
})
export class TablePracticeService {
  mentorList = require('../../assets/data/mentor.json');
  mentorData = new BehaviorSubject<Array<MentorModel>>(this.mentorList);
  constructor() { }
}
