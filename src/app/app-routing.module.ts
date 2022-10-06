import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { PastComponent } from './past/past.component';
import { UpcomeComponent } from './upcome/upcome.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'event',component:EventComponent},
  {path:'',component:PastComponent},
  {path:'upcome',component:UpcomeComponent},
  {path:'past',component:PastComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
