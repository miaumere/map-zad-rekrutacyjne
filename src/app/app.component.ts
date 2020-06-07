import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  readonly options = ['Opcja 1', 'Opcja 2', 'Opcja 3'];

  sideNavForm = new FormGroup({
    firstValue: new FormControl('', Validators.required),
    optionValue: new FormControl('', Validators.required),
    radioValue: new FormControl('')
  });

  constructor() { }

  submit() {

  }


  cancel() {
    this.sideNavForm.reset();

  }


}
