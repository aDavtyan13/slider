import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NpnSliderModule} from './project/npn-slider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NpnSliderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
