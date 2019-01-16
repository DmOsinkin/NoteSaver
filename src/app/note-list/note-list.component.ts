import {Component, OnInit, ViewChild} from '@angular/core';
import {Note} from '../Note';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {CreateNoteDialogComponent} from './create-note-dialog/create-note-dialog.component';
import {ELEMENT_DATA} from '../Data';
import {ViewNoteDialogComponent} from './view-note-dialog/view-note-dialog.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'priority', 'date'];
  notes = new MatTableDataSource<Note>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit() {
    this.notes.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog) {}

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateNoteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      ELEMENT_DATA.push(result);
      this.notes = new MatTableDataSource(ELEMENT_DATA);
    });
  }

  openViewDialog(clickedNote): void {
    console.log(clickedNote);
    this.dialog.open(ViewNoteDialogComponent, {data: clickedNote});
  }
}


