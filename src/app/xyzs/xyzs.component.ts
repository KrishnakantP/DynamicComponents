import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xyzs',
  templateUrl: './xyzs.component.html',
  styleUrls: ['./xyzs.component.scss']
})
export class XYZSComponent {
  @Input() data: any;

  ngOnChanges(){

  }
  ok(){
    
  }
}
