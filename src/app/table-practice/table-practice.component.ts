import {Component, OnDestroy, OnInit} from '@angular/core';
import {TablePracticeService} from './table-practice.service';
import {MentorModel} from './table-practice.model';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-table-practice',
  templateUrl: './table-practice.component.html',
  styleUrls: ['./table-practice.component.css']
})
export class TablePracticeComponent implements OnInit, OnDestroy {
  mentorCollect: MentorModel[];
  mentorSubscribe: Subscription;
  displayedColumns: string[] = ['Name', 'UserType', 'Email', 'Status'];
  mentorForm: FormGroup;
  constructor(
    private tablePracticeService: TablePracticeService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.mentorSubscribe = this.mentorDataCall();
  }

  ngOnDestroy(): void{
    this.mentorSubscribe.unsubscribe();
  }

  mentorDataCall(): Subscription{
    return this.tablePracticeService.mentorGetList().subscribe((data: MentorModel[]) => {
      this.mentorCollect = data;
    });
  }

  initForm(): void{
    this.mentorForm = this.fb.group({
      name: [''],
      usertype: [''],
      email: [''],
      status: ['']
    });
  }

  handleFilter(): void{
    this.mentorDataCall();
    this.mentorCollect = this.mentorCollect.filter((item: MentorModel) => {
      return this.mathcer(
        item,
        this.mentorForm.value.name,
        this.mentorForm.value.usertype,
        this.mentorForm.value.email,
        this.mentorForm.value.status,
        );
    });
  }

  mathcer(item, name, usertype, email, status): any{
    const isNameMatch = item.first_name.includes(name);
    const isLastNameMatch = item.last_name.includes(name);
    const isUserTypeMatch = item.company.user_type.includes(usertype);
    const isEmailMatch = item.email.includes(email);
    const isUserStatus = item.user_status.includes(status);
    return (isNameMatch || isLastNameMatch) && isUserTypeMatch && isEmailMatch && isUserStatus;
  }

}
