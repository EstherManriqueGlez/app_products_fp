import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Product } from 'src/app/interfaces/products';
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
    
    this.route.queryParams.subscribe((params) => {
      const page = params['page'];
      const size = params['size'];

      this._queryParams.setSearchAvailabilityParam(params['isAvailable'] || 'both');
      this._queryParams.setSearchNameParam(params['name'] || '');
      this._queryParams.setSearchMinPriceParam(params['minPrice'] || '');
      this._queryParams.setSearchMaxPriceParam(params['maxPrice'] || '');

      if (page > 0) {
        this.startingPage = page - 1; 
        this.pageSize = size;
      }
      this.refreshTableData();
    })
  }

  pageChanged(event: PageEvent): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: event.pageIndex + 1,
        size: event.pageSize
      },
      queryParamsHandling: 'merge'
    });
  }

  refreshTableData(): void {
    this.dataLoading = true;
    this._dataService.getProducts(
      this.searchName,
      this.searchAvailability,
      this.searchMinPrice,
      this.searchMaxPrice
    ).subscribe((response: Product[]) => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator.pageSize = this.pageSize;
      this.dataLoading = false;
    });
  }

  updateQueryParams(queryParams: Object): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }

}
