import { Component } from '@angular/core';
import {DataService} from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsletter-signup';


constructor( private data: DataService) {
    this.data.getNewsletter().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
}
}
