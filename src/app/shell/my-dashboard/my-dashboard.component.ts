import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { userService } from 'src/app/services/user-facade.service';
import { NotesComponent } from '../notes/notes.component';
import { TodolistComponent } from '../todolist/todolist.component';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { ExpensesComponent } from '../expenses/expenses.component';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent {
  widgets: any;
  selectedWidget: string = 'notes'
  components = new Map<string,ComponentRef<any>>();
  uniqueId: number = 0;
  @ViewChild('container',{static: true, read: ViewContainerRef}) container !: ViewContainerRef;
  constructor(private userFacade: userService,
    private resolver: ComponentFactoryResolver){
    this.fetchWidgetsList();
  }
  fetchWidgetsList(){
    this.userFacade.fetchWidgetsList().subscribe((res: any)=>{
      this.widgets  = res;
    })
  }
  createComponent(name: string){
    const component = this.getComponent(name);
    let componentIndex = name + this.uniqueId;
    this.uniqueId++;
    let data=  {
      name: componentIndex,
    }
    let  factory = this.resolver.resolveComponentFactory(component);
    let  componentRef: ComponentRef<any>=  this.container.createComponent(factory);
    componentRef.instance.data = data;
    componentRef.instance.close.subscribe((res: any)=>{
      if(this.components.has(res.name)){
        this.components.get(res.name)?.destroy();
        this.components.delete(res.name);
      }
    }) 
   this.components.set(componentIndex,componentRef);
   
  }
  getComponent(name: string): any{
    let cmp : any = NotesComponent;
    switch (name){
      case "notes" : {
        cmp = NotesComponent;
        break;
      }
      case "todolist" :{
        cmp=TodolistComponent;
        break;
      }
      case 'wishlist' :{
        cmp = WishlistComponent;
        break;
      }
      case 'expenses' :{
        cmp = ExpensesComponent;
        break;
      }
      
       
    }
    return cmp;
  }
}
