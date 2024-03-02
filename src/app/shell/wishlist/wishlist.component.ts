import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
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
