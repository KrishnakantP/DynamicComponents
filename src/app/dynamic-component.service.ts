import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
export interface DynamicComponent {
  data: any;
  componentRef: any;
}
@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createDynamicComponent(componentType: any, viewContainerRef: ViewContainerRef, data: any): DynamicComponent {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance;
    instance.data = data;

    return { data, componentRef };
  }

  destroyDynamicComponent(dynamicComponent: DynamicComponent) {
    dynamicComponent.componentRef.destroy();
  }

  // createDynamicComponent(componentType: any, viewContainerRef: ViewContainerRef, data: any): DynamicComponent {
  //   const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
  //   const componentRef = componentFactory.create(viewContainerRef.injector);
  //   const instance = componentRef.instance;
  //   instance.data = data;
  //   viewContainerRef.insert(componentRef.hostView);
  //   return { data, componentRef };
  // }

  // destroyDynamicComponent(dynamicComponent: DynamicComponent, viewContainerRef: ViewContainerRef) {
  //   const index = viewContainerRef.indexOf(dynamicComponent.componentRef.hostView);
  //   if (index >= 0) {
  //     viewContainerRef.remove(index);
  //   }
  // }
}

