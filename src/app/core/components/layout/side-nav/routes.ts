import { Routes } from "@angular/router";
import { HomeComponent } from "app/features/home/home.component";
import { ModulesComponent } from "app/features/modules/modules.component";
import { WarrantyKeyAssignManualComponent } from "app/pages/warranty-keys/warranty-key-assign-manual/warranty-key-assign-manual.component";
import { WarrantyKeysComponent } from "app/pages/warranty-keys/warranty-keys.component";
import { NotFoundComponent } from "../../not-found/not-found.component";

const routes: any = [
  {
    path: "",
    title: "Warranty Key",
    showMenu: true,
    children: [
      {
        path: "",
        title: "Warranty Key Master",
        component: HomeComponent,
        showAsLink: false,
      },
      {
        path: "warranty-keys",
        title: "Warranty Key Master",
        component: HomeComponent,
        showAsLink: true,
      },
      {
        path: "assign-key-manual",
        title: "Assign Key (Manual)",
        component: WarrantyKeyAssignManualComponent,
        showAsLink: true,
      },
      {
        path: "assign-key-mass",
        title: "Assign Key (Mass)",
        component: WarrantyKeysComponent,
        showAsLink: true,
      },
      {
        path: "search-warranty-keys",
        title: "Search Warranty Keys",
        component: WarrantyKeysComponent,
        showAsLink: true,
      },
    ],
  },
  {
    path: "",
    title: "Contract",
    showMenu: true,
    children: [
      {
        path: "warranty-contracts",
        title: "Warranty Contract Master",
        component: WarrantyKeysComponent,
        showAsLink: true,
      },
      {
        path: "assign-contracts",
        title: "Assign Contract (Manual)",
        component: WarrantyKeysComponent,
        showAsLink: true,
      },
      {
        path: "assign-contract-mass",
        title: "Assign Contract (Mass)",
        component: WarrantyKeyAssignManualComponent,
        showAsLink: true,
      },
      {
        path: "search-contract",
        title: "Search Contract",
        component: WarrantyKeysComponent,
        showAsLink: true,
      },
    ],
  },
  {
    path: "",
    title: "Automation Tools",
    showMenu: true,
    children: [
      {
        path: "automate-key-assignment",
        title: "Automate Key assignment",
        component: WarrantyKeysComponent,
        showAsLink: true,
      },
      {
        path: "automate-contract-assignment",
        title: "Automate Contract assignment",
        component: WarrantyKeysComponent,
        showAsLink: true,
      },
      {
        path: "transfer-report",
        title: "Transfer Report",
        component: WarrantyKeyAssignManualComponent,
        showAsLink: true,
      },
    ],
  },
  {
    path: "modules",
    component: ModulesComponent,
    pathMatch: "full",
    showMenu: false,
  },
  {
    path: "**",
    component: NotFoundComponent,
    showMenu: false,
  },
];

export default routes;
