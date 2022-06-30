import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {

  displayedColumns!: string[];
  dataSource!: MatTableDataSource<any>;
  startingPage: number = 0;

  budgetPanelOpenState: boolean = false;
  minAmount!: number;
  maxAmount!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._dataService.getProducts().subscribe((response) => {
      this.displayedColumns = ['productName', 'price', 'isAvailable'];
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;

    });
    this.route.queryParams.subscribe((params) => {
      const page = params['page'];

      if (page > 0) {
        this.startingPage = page - 1;

      }
    })
  }

  applyFilter(inputName: string, event: Event) {
    console.log(inputName);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  pageChanged(event: PageEvent) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: event.pageIndex + 1,
        size: event.pageSize
      },
      // queryParamsHandling: 'merge'
    });
  }

  resetFilters() {
    console.log('Reset filters');
    
    this.dataSource.filter = '';
  }

}
