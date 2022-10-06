import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { CenterComponent } from './center/center.component';
import { EventComponent } from './event/event.component';
import { UpcomeComponent } from './upcome/upcome.component';
import { PastComponent } from './past/past.component';
import { FooterComponent } from './footer/footer.component';
import { DropComponent } from './drop/drop.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    CenterComponent,
    EventComponent,
    UpcomeComponent,
    PastComponent,
    FooterComponent,
    DropComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
