import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
})
export class MapPageComponent implements OnInit {
  readonly options = ['Opcja 1', 'Opcja 2', 'Opcja 3'];

  menuOpenStatus = true;

  sideNavForm = new FormGroup({
    firstValue: new FormControl('', Validators.required),
    optionValue: new FormControl('', Validators.required),
    radioValue: new FormControl(''),
  });

  ngOnInit(): void {}

  submit() {}

  cancel() {
    this.sideNavForm.reset();
  }
}
