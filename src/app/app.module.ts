import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsletterSubscriptionListComponent } from './pages/newsletter-subscription-list/newsletter-subscription-list.component';
import { NewsletterSubscriptionAddUserComponent } from './pages/newsletter-subscription-add-user/newsletter-subscription-add-user.component';
import { ListSubscribersComponent } from './components/list-subscribers/list-subscribers.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsletterSubscriptionListComponent,
    NewsletterSubscriptionAddUserComponent,
    ListSubscribersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
