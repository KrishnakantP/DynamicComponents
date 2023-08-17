import { Component,  Input,  SimpleChanges,  ViewChild, ViewContainerRef } from '@angular/core';
import { XyzComponent } from '../xyz/xyz.component';
import { AbcComponent } from '../abc/abc.component';
import { XYZSComponent } from 'src/app/xyzs/xyzs.component';
import { XYZSWComponent } from 'src/app/xyzsw/xyzsw.component';
import { DynamicComponent, DynamicComponentService } from 'src/app/dynamic-component.service';

@Component({
  selector: 'app-dynamic-load-component',
  templateUrl: './dynamic-load-component.component.html',
  styleUrls: ['./dynamic-load-component.component.scss']
})
export class DynamicLoadComponentComponent {

  @Input() componentData: any;
  @Input() removeComponent: any;

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentHost!: ViewContainerRef;
 
  dynamicComponents: DynamicComponent[] = [];

  constructor(private dynamicComponentService: DynamicComponentService) {}

  ngAfterViewInit() {
    const initialDynamicComponent = this.dynamicComponentService.createDynamicComponent(
      XyzComponent,
      this.dynamicComponentHost,
      { text: 'Initial data' }
    );
    this.dynamicComponents.push(initialDynamicComponent);
  }

  addDynamicComponent() {
    const newDynamicComponent = this.dynamicComponentService.createDynamicComponent(
      XyzComponent,
      this.dynamicComponentHost,
      { text: 'New component data' }
    );
    this.dynamicComponents.push(newDynamicComponent);
  }

  removeDynamicComponent(dynamicComponent: DynamicComponent) {
    this.dynamicComponentService.destroyDynamicComponent(dynamicComponent);
    const index = this.dynamicComponents.indexOf(dynamicComponent);
    if (index >= 0) {
      this.dynamicComponents.splice(index, 1);
    }
  }

}


// @ViewChild(DynamicComponentDirective, { static: true }) dynamicComponentHost!: DynamicComponentDirective;

// dynamicComponents: DynamicComponent[] = [];

// constructor(private dynamicComponentService: DynamicComponentService) {}

// ngAfterViewInit() {
//   const initialDynamicComponent = this.dynamicComponentService.createDynamicComponent(
//     DynamicComponentComponent,
//     this.dynamicComponentHost.viewContainerRef,
//     { text: 'Initial data' }
//   );
//   this.dynamicComponents.push(initialDynamicComponent);
// }

// addDynamicComponent() {
//   const newDynamicComponent = this.dynamicComponentService.createDynamicComponent(
//     DynamicComponentComponent,
//     this.dynamicComponentHost.viewContainerRef,
//     { text: 'New component data' }
//   );
//   this.dynamicComponents.push(newDynamicComponent);
// }

// removeDynamicComponent(dynamicComponent: DynamicComponent) {
//   this.dynamicComponentService.destroyDynamicComponent(dynamicComponent, this.dynamicComponentHost.viewContainerRef);
//   const index = this.dynamicComponents.indexOf(dynamicComponent);
//   if (index >= 0) {
//     this.dynamicComponents.splice(index, 1);
//   }
// }
