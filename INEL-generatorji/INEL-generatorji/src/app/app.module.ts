import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { SsccGeneratorComponent } from './sscc-generator/sscc-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    SsccGeneratorComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }