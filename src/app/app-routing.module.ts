import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//pour changer des pages il faut faire le routing:
import {HomePageComponent} from './home-page/home-page.component';
import {CommunauteComponent} from './communaute/communaute.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'communaute', component: CommunauteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
