import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SHUIButtonComponent } from './shuibutton-componet/shuibutton-componet.component';
import { VaddinComponetComponent } from './vaddin-componet/vaddin-componet.component';

@NgModule({
  declarations: [
    AppComponent,
    SHUIButtonComponent,
    VaddinComponetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
