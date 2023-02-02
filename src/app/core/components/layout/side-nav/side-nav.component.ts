import { Component } from "@angular/core";
import routes from "../../../../app-routes";
@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent {
  showMenu = false;
  menu = routes;
  constructor() {}
}
