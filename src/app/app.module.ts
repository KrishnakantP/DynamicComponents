import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainLayoutComponent } from 'src/core/components/main-layout.component';
import { SidebarComponent } from 'src/core/components/sidebar/sidebar.component';
import {  DynamicUiComponent } from 'src/components/dynamic-components/dynamic-ui.component';
import { AbcComponent } from 'src/components/abc/abc.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SidebarComponent,
    DynamicUiComponent,
    AbcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
