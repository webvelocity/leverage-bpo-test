import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }

  public errorHandling(formName: FormGroup, controlName: string, errorName: string): boolean {
    // @ts-ignore
    return formName.get(controlName).hasError(errorName);
  }
}
