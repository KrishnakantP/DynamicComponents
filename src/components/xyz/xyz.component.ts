import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent {
  @Input() data: any;

  ngOnChanges(){

  }
  ok(){
    
  }
}
