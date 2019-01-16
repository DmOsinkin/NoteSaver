import {Component, Input, Pipe, PipeTransform} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Note} from '../../Note';
import {PriorityEnum} from '../../PriorityEnum';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './create-note-dialog.component.html',
  styleUrls: ['./create-note-dialog.component.css']
})
export class CreateNoteDialogComponent {

  @Input()
  title: string;
  @Input()
  priority: PriorityEnum;
  @Input()
  date: Date;
  priorityEnum = PriorityEnum;

  constructor(public dialogRef: MatDialogRef<CreateNoteDialogComponent>) {
    this.title = '';
    this.date = new Date();
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    const newNote = new Note(this.title, PriorityEnum[this.priority], this.date);
    this.dialogRef.close(newNote);
  }
}

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: Object) {
    return Object.keys(data);
  }
}
