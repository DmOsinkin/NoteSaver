import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNoteDialogComponent } from './view-note-dialog.component';

describe('ViewNoteDialogComponent', () => {
  let component: ViewNoteDialogComponent;
  let fixture: ComponentFixture<ViewNoteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNoteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
