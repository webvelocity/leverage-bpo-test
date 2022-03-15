import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter-subscription-add-user',
  templateUrl: './newsletter-subscription-add-user.component.html',
  styleUrls: ['./newsletter-subscription-add-user.component.scss']
})
export class NewsletterSubscriptionAddUserComponent implements OnInit {

  texting?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
