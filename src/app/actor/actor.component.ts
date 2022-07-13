import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActorService} from './actor.service';
import {ActorModel} from './actor.model';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {CreateActorsComponent} from './create-actors/create-actors.component';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit, OnDestroy {
  actorListSubscribe: Subscription;
  actorCollect: ActorModel[] = [];
  formCreateActor: FormGroup;
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private actorService: ActorService
  ) { }

  ngOnInit(): void {
    this.actorListSubscribe = this.actorService.actorData.subscribe((data: ActorModel[]) => {
      this.actorCollect = data;
    }, (error) => {
      console.log('error');
      console.log(error);
    });
  }

  ngOnDestroy(): void{
    this.actorListSubscribe.unsubscribe();
  }

  handleAdd(): void{
    console.log('add button');
    this.dialog.open(CreateActorsComponent, {
      width: '600px',
    });
  }


}
