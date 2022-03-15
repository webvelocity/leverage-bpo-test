import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {environment} from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  token = new BehaviorSubject<string>('83ad5e60-a432-11ec-a5a1-7315af739170');

  headers = new BehaviorSubject<HttpHeaders>(new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token.value}`
    }
  ));


  constructor(private http: HttpClient) {
  }

  getNewsletter() {
    return this.http.get(`${environment.PROD_URL}/newletter`, {headers: this.headers.value});
  }

  postNewsletter(name: string, email: string) {
    return this.http.post(`${environment.PROD_URL}/newletter`, {name, email}, {headers: this.headers.value});
  }

  deleteNewsletter(id: number) {
    return this.http.delete(`${environment.PROD_URL}/newsletter/${id}`, {headers: this.headers.value});
  }


}
