import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainLayoutComponent } from 'src/core/components/main-layout.component';
import { SidebarComponent } from 'src/core/components/sidebar/sidebar.component';
import {  DynamicUiComponent } from 'src/components/dynamic-components/dynamic-ui.component';
import { AbcComponent } from 'src/components/abc/abc.component';
import { XyzComponent } from '../components/xyz/xyz.component';
import { DynamicLoaderComponentComponent } from '../components/dynamic-loader-component/dynamic-loader-component.component';
import { XYZSComponent } from './xyzs/xyzs.component';
import { XYZSWComponent } from './xyzsw/xyzsw.component';
import { DynamicLoadComponentComponent } from 'src/components/dynamic-load-component/dynamic-load-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SidebarComponent,
    DynamicUiComponent,
    AbcComponent,
    XyzComponent,
    DynamicLoaderComponentComponent,
    DynamicLoadComponentComponent,
    XYZSComponent,
    XYZSWComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
