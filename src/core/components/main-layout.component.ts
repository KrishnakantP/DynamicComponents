import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  sidebarExpanded: boolean = true;
  componentData:any;
  removeComponentData:any;
  constructor() {
  }
  
  ngOnInit() {
  }


  selectComponent(component:any){
    this.componentData = component;
  }

  removeComponent(component:any) {
    this.removeComponentData = component;
  }
}
