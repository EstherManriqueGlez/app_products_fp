import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { Product } from 'src/app/interfaces/products';
import { DataService } from 'src/app/services/data.service';
import { QueryParamsService } from 'src/app/services/query-params.service';

@Component({
  selector: 'app-data-table-filter-be',
  templateUrl: './data-table-filter-be.component.html',
  styleUrls: ['./data-table-filter-be.component.scss']
})
export class DataTableFilterBeComponent implements OnInit {

  displayedColumns: string[] = ['productName', 'price', 'isAvailable'];

  dataSource = new MatTableDataSource<Product>();

  startingPage: number = 0;

  pageIndex: number = 1;
  pageSize: number | null = null;
  dataLoading: boolean = true;

  searchName: string = '';
  searchAvailability: string = '';
  searchMinPrice: string = '';
  searchMaxPrice: string =  '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _dataService: DataService, private _queryParams: QueryParamsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get search variables (globals) from shared service
    this._queryParams.currentSearchNameParam.subscribe((name) => {
      this.searchName = name;
    })
    this._queryParams.currentSearchMinPriceParam.subscribe((minPrice) => {
      this.searchMinPrice = minPrice;
    })
    this._queryParams.currentSearchMaxPriceParam.subscribe((maxPrice) => {
      this.searchMaxPrice = maxPrice;
    })
    this._queryParams.currentSearchAvailabilityParam.subscribe((availability) => {
      this.searchAvailability = availability;
    })
    
    // Listen to url query params change
    this.route.queryParams.subscribe((params) => {
      const page = params['page'];
      const size = params['size'];

      // Update search variables (globals) in shared service with the query params values
      this._queryParams.setSearchAvailabilityParam(params['isAvailable'] || 'both');
      this._queryParams.setSearchNameParam(params['name'] || '');
      this._queryParams.setSearchMinPriceParam(params['minPrice'] || '');
      this._queryParams.setSearchMaxPriceParam(params['maxPrice'] || '');

      // If page query param is set, update table pager initial page
      if (page > 0) {
        this.startingPage = page - 1; 
        this.pageSize = size;
      }
      // Run API fetch
      // @see: function definition below
      this.refreshTableData();
    })
  }

  // listen to pager change to update query params (page and size)
  pageChanged(event: PageEvent): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: event.pageIndex + 1,
        size: event.pageSize
      },
      queryParamsHandling: 'merge' // add params to the existing query params (if exists)
    });
  }

  // Use data.service to get products from API
  refreshTableData(): void {
    this.dataLoading = true; // show spinner gif
    this._dataService.getProducts(
      this.searchName, // use shared search variables (dynamically updated from this component, or table or header components)
      this.searchAvailability,
      this.searchMinPrice,
      this.searchMaxPrice
    ).subscribe((response: Product[]) => {
      this.dataSource.data = response; // update table data with fetch result
      this.dataSource.paginator = this.paginator; // update paginator
      this.dataSource.paginator.pageSize = this.pageSize; // update page size
      this.dataLoading = false; // hide spinner gif when fetch ends
    });
  }
}
