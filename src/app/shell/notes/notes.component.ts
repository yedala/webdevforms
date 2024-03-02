import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  @Input() data: any;
  @Output() close = new EventEmitter<any>();
  constructor(){
    console.log('notes');
  }
  closeCmp(){
    this.close.emit({
      name: this.data.name,
    })
  }
}
