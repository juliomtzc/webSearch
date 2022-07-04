import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {HttpClientModule} from "@angular/common/http";
import { Search2Component } from './search2/search2.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    Search2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [SearchComponent]

})
export class AppModule { }
