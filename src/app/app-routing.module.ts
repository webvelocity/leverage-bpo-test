import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSubscribersComponent } from './components/list-subscribers/list-subscribers.component';
import { AddSubscriberComponent } from './components/add-subscriber/add-subscriber.component';

const routes: Routes = [
  { path: '', redirectTo: 'subscribers', pathMatch: 'full' },
  { path: 'subscribers', component: ListSubscribersComponent },
  { path: 'subscribers/create', component: AddSubscriberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
