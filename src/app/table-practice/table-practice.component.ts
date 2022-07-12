import {Component, OnDestroy, OnInit} from '@angular/core';
import {TablePracticeService} from './table-practice.service';
import {MentorModel} from './table-practice.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-table-practice',
  templateUrl: './table-practice.component.html',
  styleUrls: ['./table-practice.component.css']
})
export class TablePracticeComponent implements OnInit, OnDestroy {
  mentorCollect: MentorModel[];
  mentorSubscribe: Subscription;
  displayedColumns: string[] = ['Name', 'UserType', 'Email', 'Status'];
  constructor(private tablePracticeService: TablePracticeService) { }

  ngOnInit(): void {
    this.mentorSubscribe = this.tablePracticeService.mentorData.subscribe((data: MentorModel[]) => {
       this.mentorCollect = data;
    });
  }

  ngOnDestroy(): void{
    this.mentorSubscribe.unsubscribe();
  }
}
