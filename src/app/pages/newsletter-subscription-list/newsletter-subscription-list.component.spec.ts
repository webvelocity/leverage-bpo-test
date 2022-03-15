import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSubscriptionListComponent } from './newsletter-subscription-list.component';

describe('NewsletterSubscriptionListComponent', () => {
  let component: NewsletterSubscriptionListComponent;
  let fixture: ComponentFixture<NewsletterSubscriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterSubscriptionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterSubscriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
