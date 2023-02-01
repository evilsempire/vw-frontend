import { Component } from "@angular/core";
import routes from "./routes";
@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent {
  showMenu = false;
  menu = routes;
  // routes = [
  //   {
  //     parentLabel: "Warranty Key",
  //     parentLink: "#",
  //     childRoutes: [
  //       {
  //         label: "Warranty Key Master",
  //         url: "/warranty-keys",
  //       },
  //       {
  //         label: "Assign Key (Manual)",
  //         url: "/assign-key-manual",
  //       },
  //       {
  //         label: "Assign Key (Mass)",
  //         url: "/assign-key-mass",
  //       },
  //       {
  //         label: "Search Warranty Keys",
  //         url: "/search-warranty-keys",
  //       },
  //     ],
  //   },
  //   {
  //     parentLabel: "Contract",
  //     parentURL: "#",
  //     childRoutes: [
  //       {
  //         label: "Warranty Contract Master",
  //         url: "/warranty-contracts",
  //       },
  //       {
  //         label: "Assign Contract (Manual)",
  //         url: "/assign-contracts",
  //       },
  //       {
  //         label: "Assign Contract (Mass)",
  //         url: "/assign-key-mass",
  //       },
  //       {
  //         label: "Search Contract",
  //         url: "/search-contract",
  //       },
  //     ],
  //   },
  //   {
  //     parentLabel: "Automation Tools",
  //     parentURL: "#",
  //     childRoutes: [
  //       {
  //         label: "Automate Key assignment",
  //         url: "/automate-key-assignment",
  //       },
  //       {
  //         label: "Automate Contract assignment",
  //         url: "/automate-contract-assignment",
  //       },
  //       {
  //         label: "Transfer Report",
  //         url: "/transfer-report",
  //       },
  //     ],
  //   },
  // ];

  constructor() {}
}
