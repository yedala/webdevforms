import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent {
  @Input() data: any;
  @Output() close = new EventEmitter<any>();
  constructor(){

  }
  closeCmp(){
    this.close.emit({
      name: this.data.name,
    })
  }


}
