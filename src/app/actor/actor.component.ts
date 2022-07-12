import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActorService} from './actor.service';
import {ActorModel} from './actor.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit, OnDestroy {
  actorListSubscribe: Subscription;
  actorCollect: ActorModel[] = [];
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorListSubscribe = this.actorService.actorData.subscribe((data: ActorModel[]) => {
      this.actorCollect = data;
    });
  }

  ngOnDestroy(): void{
    this.actorListSubscribe.unsubscribe();
  }

}
