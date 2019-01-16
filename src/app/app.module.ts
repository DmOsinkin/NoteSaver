import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NoteListComponent} from './note-list/note-list.component';
import {EnumToArrayPipe, CreateNoteDialogComponent} from './note-list/create-note-dialog/create-note-dialog.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule, MatNativeDateModule, MatOptionModule,
  MatPaginatorModule,
  MatRadioModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { ViewNoteDialogComponent } from './note-list/view-note-dialog/view-note-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    CreateNoteDialogComponent,
    EnumToArrayPipe,
    ViewNoteDialogComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateNoteDialogComponent,
    ViewNoteDialogComponent
  ]
})
export class AppModule {
}
