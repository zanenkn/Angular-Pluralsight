import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CatListComponent} from './cats/cat-list.component'

@NgModule({
  declarations: [AppComponent, CatListComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
