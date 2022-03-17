import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {throwError} from 'rxjs';
import {DataService} from 'src/app/services/data.service';
import {HelpersService} from 'src/app/services/helpers.service';

@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.scss']
})
export class AddSubscriberComponent implements OnInit, OnDestroy {

  errorObject?: HttpErrorResponse;
  successMsg: string = '';
  buttonText = 'Add Subscriber';
  createSubscriber: any;
  form: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private data: DataService, private fb: FormBuilder, public helpers: HelpersService) {
  }

  ngOnInit(): void {
  }


  onSubmit = () => {
    if (this.form.invalid) return; // double guard, cross-browser was behaving weirdly
    this.buttonText = 'Adding...';
    const {name, email} = this.form?.value;
    this.createSubscriber = this.data.createSubscriber(name, email).subscribe((res) => {
        this.successMsg = `${res.name} has been added to the subscribers list!`;
        this.buttonText = 'Add Subscriber';
      },
      err => {
        this.errorObject = err;
        return throwError(err);
      });
  }


  ngOnDestroy(): void {
    this.errorObject = undefined;
    this.createSubscriber?.unsubscribe();
  }

}
