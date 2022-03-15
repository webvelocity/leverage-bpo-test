import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSubscriptionAddUserComponent } from './newsletter-subscription-add-user.component';

describe('NewsletterSubscriptionAddUserComponent', () => {
  let component: NewsletterSubscriptionAddUserComponent;
  let fixture: ComponentFixture<NewsletterSubscriptionAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterSubscriptionAddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterSubscriptionAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
