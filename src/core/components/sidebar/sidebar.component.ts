import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Output() selectComponent: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeComponent: EventEmitter<any> = new EventEmitter<any>();
  componentData = [
    {
      id: 1,
      text: 'instance 1',
      url:'https://www.google.com/'
    },
    {
      id: 2,
      text: 'instance 2',
      url:'http://ibix.com'
    },
    {
      id: 3,
      text: 'instance 3',
      url:'http://bookmyshow.com'
    },
    {
      id: 4,
      text: 'instance 4',
      url:'http://myntra.com'
    },
    {
      id: 5,
      text: 'instance 5',
      url:'http://amazon.com'
    },
    {
      id: 6,
      text: 'instance 6',
      url:'http://aws.com'
    }, {
      id: 7,
      text: 'instance 7',
      url:'http://flipkart.com'
    },
    {
      id: 8,
      text: 'instance 8',
      url:'http://facebook.com'
    }]

  instanceClick(component:any){
    this.selectComponent.emit(component);
  }

  close(dynamicData:any){
    this.componentData = this.componentData.filter((data)=>data.id !== dynamicData.id)
    this.removeComponent.emit(dynamicData);
  }
}
