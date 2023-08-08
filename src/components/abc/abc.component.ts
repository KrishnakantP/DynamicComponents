import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DATA_TOKEN } from '../dynamic-components/dynamic-ui.component';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss']
})
export class AbcComponent {
  data:any = inject(DATA_TOKEN); 
  iframeSrc: SafeResourceUrl = '';
  @Output() updated:any = new EventEmitter()
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {

    console.log('dynamic component ngOnInit',this.data.message?.text)
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.message.url);
 
  }
  ok(){
    this.data.updated('hi')
  }


}
