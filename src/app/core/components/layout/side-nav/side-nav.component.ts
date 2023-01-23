import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent  {
  showMenu = false;
  folders = [
    {
      name: "Hello",
      updated: "updated time"
    },
    {
      name: "Hello3",
      updated: "updated time"
    },
    {
      name: "Hello2",
      updated: "updated time"
    },
  ];

  notes = [
    {
      name: "Hello",
      updated: "updated time"
    },
    {
      name: "Hello3",
      updated: "updated time"
    },
    {
      name: "Hello2",
      updated: "updated time"
    },
  ]
  constructor() {}

}
