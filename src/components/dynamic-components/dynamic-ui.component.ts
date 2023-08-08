import { Component, InjectionToken, Injector, Input, SimpleChanges, inject } from '@angular/core';
import { AbcComponent } from '../abc/abc.component';

export interface DynamicData {
  message: string;
  updated: (changes: any) => void; // callback to update the data
}

export const DATA_TOKEN = new InjectionToken<DynamicData>("data");

@Component({
  selector: 'dynamic-ui',
  templateUrl: './dynamic-ui.component.html',
  styleUrls: ['./dynamic-ui.component.scss']
})
export class DynamicUiComponent {
  private readonly injector = inject(Injector);
  activeView:any;
  userInput: string = '';
  dynnamicComponent = AbcComponent;
  dynamicComponents: any = [];

  @Input() componentData: any;
  @Input() removeComponent: any;


  componentId: any = null;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['componentData']?.firstChange && changes['componentData']?.currentValue?.id !== changes['componentData']?.previousValue?.id ) {
      if (this.checkIfComponentPresent(this.componentData)) {
        this.componentId = this.componentData.id
      } else {
        this.componentId = this.componentData.id;
        const injector = Injector.create({
          parent: this.injector,
          providers: [{
            provide: DATA_TOKEN,
            useValue: {
              message: this.componentData,
              updated: (changes: any) => console.log("data changes", this.componentId, changes),
            },
          }],
        })
        this.dynamicComponents.push({ ...this.componentData, injector: injector })
      }
    }
    if (changes['removeComponent']) {
      if (!changes['removeComponent'].firstChange && (changes['removeComponent'].currentValue !== changes['removeComponent'].previousValue)) {
        this.dynamicComponents = this.dynamicComponents.filter((data:any)=>data.id !== changes['removeComponent'].currentValue.id)
        console.log(this.dynamicComponents)
      }
    }
  }

  checkIfComponentPresent(componentData: any) {
    return this.dynamicComponents.some((data: any) => data?.id === componentData.id)
  }
}
