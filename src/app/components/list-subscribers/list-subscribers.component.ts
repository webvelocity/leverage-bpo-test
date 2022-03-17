import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {DataService} from 'src/app/services/data.service';
import {User} from 'src/interfaces/User.model';

@Component({
  selector: 'list-subscribers',
  templateUrl: './list-subscribers.component.html',
  styleUrls: ['./list-subscribers.component.scss'],
})
export class ListSubscribersComponent implements OnInit {

  subscribers$?: Observable<User[]>;
  errorObject?: HttpErrorResponse;
  selectedSubscribers?: any;;

  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    this.getAllSubscribers();
  }

  getAllSubscribers() {
    this.subscribers$ = this.data.getSubscribers().pipe(
      tap((subscribers: User[]) => subscribers.sort((a: User, b: User) => (a.created_on > b.created_on) ? -1 : 1)),
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  deleteSubscriber(id: any) {
    if (!confirm("Are you sure you want to delete this subscriber?")) return;

    this.data.deleteSubscriber(id).subscribe(
      () => this.subscribers$ = this.data.getSubscribers().pipe(
        tap((subscribers: User[]) => subscribers.sort((a: User, b: User) => (a?.created_on > b?.created_on) ? -1 : 1)),
        catchError(err => {
          this.errorObject = err;
          return throwError(err);
        })
      )
    );
  }
  


}
