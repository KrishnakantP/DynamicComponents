import { Component,  Input,  SimpleChanges,  ViewChild, ViewContainerRef } from '@angular/core';
import { XyzComponent } from '../xyz/xyz.component';
import { AbcComponent } from '../abc/abc.component';
import { XYZSComponent } from 'src/app/xyzs/xyzs.component';
import { XYZSWComponent } from 'src/app/xyzsw/xyzsw.component';

@Component({
  selector: 'app-dynamic-loader-component',
  templateUrl: './dynamic-loader-component.component.html',
  styleUrls: ['./dynamic-loader-component.component.scss']
})
export class DynamicLoaderComponentComponent {

  @Input() componentData: any;
  @Input() removeComponent: any;
  dynamicComponents: any = [];
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer!: ViewContainerRef;
  activeComponent: string = '';
  componentId: any = null;
  componentNames:any[]=[];
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['componentData']?.firstChange && changes['componentData']?.currentValue?.id !== changes['componentData']?.previousValue?.id ) {
      if (this.checkIfComponentPresent(this.componentData)) {
        this.componentId = this.componentData.id
      } else {
        this.componentId = this.componentData.id;
        this.dynamicComponents.push({ ...this.componentData})
      }
    }
    if (changes['removeComponent']) {
      if (!changes['removeComponent'].firstChange && (changes['removeComponent'].currentValue !== changes['removeComponent'].previousValue)) {
        this.dynamicComponents = this.dynamicComponents.filter((data:any)=>data.id !== changes['removeComponent'].currentValue.id)
        console.log(this.dynamicComponents)
      }
    }
  }


  loadDynamicComponent(componentName: string) {

    const curentComp = this.getComponentType(componentName);
    const componentRef = this.dynamicComponentContainer.createComponent(curentComp);

    // Set input for the dynamic component
    componentRef.instance.data = {
      text:'Hello from dynamic component!'+curentComp,
      url:'google.com'
    }

    const componentElement = componentRef.location.nativeElement;
    this.componentNames.push(componentName);
   // Toggle visibility using CSS classes
   this.componentNames.forEach(name => {
    if (name === componentName) {
      componentElement.style.display = '';
      this.dynamicComponentContainer.clear();
    } else {
      componentElement.style.display = 'none';
    }
  });

  }

  getComponentType(componentName: string) {
    switch (componentName) {
      case 'XYZSComponent':
        return XYZSComponent;
      case 'XyzComponent':
        return XyzComponent;
      case 'ComponentC':
        return XYZSWComponent;
      default:
        throw new Error(`Component ${componentName} not found`);
    }
  }

  checkIfComponentPresent(componentData: any) {
    return this.dynamicComponents.some((data: any) => data?.id === componentData.id)
  }



}
