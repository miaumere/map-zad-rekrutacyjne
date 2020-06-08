import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'void',
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        })
      ),
      state(
        'in',
        style({
          opacity: 1,
        })
      ),
      transition(':enter', [animate('0.7s')]),
      transition(':leave', [animate('0.3s')]),
    ]),
  ],
})
export class SideMenuComponent implements OnInit {
  @HostBinding('@openClose') openClose = 'in';

  sections = [
    {
      sectionName: 'Water Levels',
      sectionValues: [
        {
          title: 'CEMES',
          desc:
            'Quantitiy stamp\nInterpolation\nResolution\nMore meta data\nPrice',
        },
        {
          title: 'bla bla bla',
          desc:
            'Quantitiy stamp\nInterpolation\nResolution\nMore meta data\nPrice',
        },
      ],
    },
    {
      sectionName: 'Salnity',
      sectionValues: [
        {
          title: 'GFS bla bla bla',
          desc:
            'Quantitiy stamp\nInterpolation\nResolution\nMore meta data\nPrice',
        },
        {
          title: 'DHI bla bla bla',
          desc:
            'Quantitiy stamp\nInterpolation\nResolution\nMore meta data\nPrice',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
