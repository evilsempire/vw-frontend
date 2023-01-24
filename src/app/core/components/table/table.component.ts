import { AfterViewInit, Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { LiveAnnouncer } from '@angular/cdk/a11y';


export interface TableColumn {
  name: string;
  dataKey: string;
  position?: 'right' | 'left';
  isSortable?: boolean;
}
export interface WarrantyKeys {
  keyID: string;
  description: string;
  country: string;
  lastUpdated: string; // should be date type in implementations
  createdBy: string;
  creationDate: string; // should be date type in implementation
}
/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit,OnInit {
  displayedColumns: string[];
  tableDataSource: MatTableDataSource<WarrantyKeys>;
  selection = new SelectionModel<WarrantyKeys>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) matSort: MatSort;

  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() isSelectRowAction: boolean;
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

  //@ts-ignore
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }



  constructor(private _liveAnnouncer: LiveAnnouncer) {

    console.log(this.isSelectRowAction)
  }

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    if (this.isSelectRowAction) {
      this.displayedColumns = ["select", ...columnNames];
    } else {
      this.displayedColumns = columnNames;
    }
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
  }

  setTableDataSource(data: any) {
    console.log(data);
    this.tableDataSource = new MatTableDataSource<any>(data);
    this.tableDataSource.paginator = this.paginator;
    this.tableDataSource.sort = this.matSort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.tableDataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.tableDataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: WarrantyKeys): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${1}`;
  }

  sortTable(sortParameters: Sort) {
    // defining name of data property, to sort by, instead of column name
    sortParameters.active = this.tableColumns.find(column => column.name === sortParameters.active).dataKey;
    this.sort.emit(sortParameters);
  }

  emitRowAction(row: any) {
    this.rowAction.emit(row);
  }
}


