import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
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
