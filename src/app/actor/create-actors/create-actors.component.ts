import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActorService} from '../actor.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-create-actors',
  templateUrl: './create-actors.component.html',
  styleUrls: ['./create-actors.component.css']
})
export class CreateActorsComponent implements OnInit {
  formCreateActor: FormGroup;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CreateActorsComponent>,
    private fb: FormBuilder,
    private actorService: ActorService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void{
    this.formCreateActor = this.fb.group({
      civility: [''],
      name: [''],
      first_name: [''],
      last_name: [''],
      birth: [new Date()],
      gender: [''],
    });
  }

  handleCancel(): void{
    this.initForm();
    this.dialogRef.close();
  }

  handleSubmit(): void{
    const status = 'failed';
    this.actorService.addActors(status , this.formCreateActor.value);
    this.dialogRef.close();
  }


}
