import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from 'src/environments/environment.prod';
import { User } from 'src/interfaces/User.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  access_token = '13ae16a0-a45e-11ec-b49f-8f2e88a8991e';
  
  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': `${this.access_token}`
    });
    
  constructor(private http: HttpClient) {
  }

  getSubscribers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.PROD_URL}/newsletter`, {headers: this.headers});
  }

  createSubscriber(name: string, email: string): Observable<User> {
    return this.http.post<User>(`${environment.PROD_URL}/newsletter`, {name, email}, {headers: this.headers});
  }

  deleteSubscriber(id: string) {
    return this.http.delete(`${environment.PROD_URL}/newletter/${id}`, {headers: this.headers});
  }

}
