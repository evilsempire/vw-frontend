import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Sort } from "@angular/material/sort";

export interface WarrantyKeys {
  keyID: string;
  description: string;
  country: string;
  lastUpdated: string; // should be date type in implementations
  createdBy: string;
  creationDate: string; // should be date type in implementation
}

export interface TableColumn {
  name: string;
  dataKey: string;
  position?: "right" | "left";
  isSortable?: boolean;
  columnWidth?: Number;
}
@Component({
  selector: "app-modules",
  templateUrl: "./modules.component.html",
  styleUrls: ["./modules.component.scss"],
})
export class ModulesComponent implements OnInit {
  warrantyKeys: WarrantyKeys[];
  warrantyKeysTableColumns: TableColumn[];

  /****************************************************************** */
  /****************************************************************** */
  //////////////////// REUSABLE INPUT CONTENT STARTS ///////////////////
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
    Validators.pattern(/^[@a-zA-Z0-9_-]*$/),
  ]);
  warrantyKeyFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(3),
  ]);

  selectFormControl = new FormControl("", [Validators.required]);
  selectOptions = [];
  //////////////////// REUSABLE INPUT CONTENT ENDS /////////////////////
  /****************************************************************** */
  /****************************************************************** */

  ngOnInit(): void {
    this.initializeColumns();
    this.warrantyKeys = [];
  }

  sortData(sortParameters: Sort): any {
    //you can use server side here as well
    const keyName = sortParameters.active;
    if (sortParameters.direction === "asc") {
      this.warrantyKeys = this.warrantyKeys.sort(
        (a: WarrantyKeys, b: WarrantyKeys) =>
          a[keyName].localeCompare(b[keyName])
      );
    } else if (sortParameters.direction === "desc") {
      this.warrantyKeys = this.warrantyKeys.sort(
        (a: WarrantyKeys, b: WarrantyKeys) =>
          b[keyName].localeCompare(a[keyName])
      );
    } else {
      return (this.warrantyKeys = this.getWarrantyKeys());
    }
  }


  initializeColumns(): void {
    this.warrantyKeysTableColumns = [
      {
        name: "key ID",
        dataKey: "keyID",
        position: "left",
        isSortable: true,
        columnWidth: 10,
      },
      {
        name: "Description",
        dataKey: "description",
        position: "left",
        isSortable: false,
        columnWidth: 25,
      },
      {
        name: "Country",
        dataKey: "country",
        position: "left",
        isSortable: true,
        columnWidth: 25,
      },
      {
        name: "Last updated",
        dataKey: "lastUpdated",
        position: "left",
        isSortable: false,
        columnWidth: 25,
      },
      {
        name: "Created By",
        dataKey: "createdBy",
        position: "left",
        isSortable: false,
        columnWidth: 25,
      },
      {
        name: "Creation Date",
        dataKey: "creationDate",
        position: "left",
        isSortable: true,
        columnWidth: 25,
      },
    ];
  }



  waitForTableResponse(event: any) {
    console.log(event);
    setTimeout(() => {
      this.warrantyKeys = this.getWarrantyKeys(event);
    },2000)
  }
  waitForFilterResponse(value: string) {
    this.getCountryList({ name: value });
  }

  private getCountryList(params: object = {}): void {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => (this.selectOptions = json));
    //https://jsonplaceholder.typicode.com/todos
    // this.selectOptions  = [
    //   {
    //     key: 1, value: 'Option 1',

    //   },{
    //     key: 2, value: 'Option 2'
    //   },
    //   {
    //     key: 3, value: 'Option 3'
    //   }
    // ];
  }


  //this logic is for reference only
  getWarrantyKeys(length = 5): any[] {
    //here you can add service layer for server side rendering
    const data = [];
    for (let index = 0; index < length; index++) {
      data.push({
        keyID:'U'+index,
        description: "MAF Sensor EXT 7/70,000 US ONLY",
        country: "USA, Canada",
        lastUpdated: "05/17/2020 15:30",
        createdBy: "HartelJ",
        creationDate: "05/17/2020",
      })
    }
    return data;
  }
}
