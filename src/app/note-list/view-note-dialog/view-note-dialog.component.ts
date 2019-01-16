import {Component, Inject, Input, OnInit} from '@angular/core';
import {PriorityEnum} from '../../PriorityEnum';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Note} from '../../Note';

@Component({
  selector: 'app-view-node-dialog',
  templateUrl: './view-note-dialog.component.html',
  styleUrls: ['./view-note-dialog.component.css']
})
export class ViewNoteDialogComponent {

  @Input()
  title: string;
  @Input()
  priority: PriorityEnum;
  @Input()
  date: Date;

  constructor(public dialogRef: MatDialogRef<ViewNoteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Note) {
    console.log(JSON.stringify(data));
    this.title = data.title;
    this.priority = data.priority;
    this.date = data.date;
  }

  close(): void {
    this.dialogRef.close();
  }

}
