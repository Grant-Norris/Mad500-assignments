import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassCardComponent } from './class-card/class-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassListComponent,
    ClassCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
