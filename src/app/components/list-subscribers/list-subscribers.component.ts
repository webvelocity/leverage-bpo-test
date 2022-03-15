import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {DataService} from 'src/app/services/data.service';
import {User} from 'src/interfaces/User.model';

@Component({
  selector: 'list-subscribers',
  templateUrl: './list-subscribers.component.html',
  styleUrls: ['./list-subscribers.component.scss']
})
export class ListSubscribersComponent implements OnInit {

  subscribers$?: Observable<User[]>;
  errorObject?: HttpErrorResponse;

  constructor(private data: DataService) {
  }
  
  ngOnInit(): void {
    this.subscribers$ = this.data.getSubscribers().pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }


}
