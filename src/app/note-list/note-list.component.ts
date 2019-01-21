import {Component, OnInit, ViewChild} from '@angular/core';
import {Note} from '../Note';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {CreateNoteDialogComponent} from './create-note-dialog/create-note-dialog.component';
import {ViewNoteDialogComponent} from './view-note-dialog/view-note-dialog.component';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'priority', 'date'];
  notes: Note[];
  noteMatTableDataSource: MatTableDataSource<Note>;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngOnInit() {
    this.getNotes();
    this.noteMatTableDataSource.paginator = this.paginator;
  }

  constructor(private apiService: ApiService, public dialog: MatDialog) {
  }

  getNotes(): void {
    this.apiService.getNotes()
      .subscribe(notes => this.notes = notes);
    this.noteMatTableDataSource = new MatTableDataSource(this.notes);
  }

  add(note: Note): void {
    if (!note) {
      return;
    }
    this.apiService.postNote(note)
      .subscribe(note => {
        this.notes.push(note);
        this.noteMatTableDataSource = new MatTableDataSource(this.notes);
      });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateNoteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.add(result);
    });
  }

  openViewDialog(clickedNote): void {
    console.log(clickedNote);
    this.dialog.open(ViewNoteDialogComponent, {data: clickedNote});
  }
}


