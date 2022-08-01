import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NotesListComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    RouterModule
  ]
})
export class NotesModule { }
