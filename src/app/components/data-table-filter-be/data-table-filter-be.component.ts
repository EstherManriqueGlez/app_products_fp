import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Product } from 'src/app/interfaces/products';
import { MatRadioChange } from '@angular/material/radio';

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
  searchName: string = '';
  searchAvailability: string = 'both';
  searchMinPrice: string = '';
  searchMaxPrice: string = '';
  dataLoading: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  nameFilter = new FormControl('');
  minPriceFilter = new FormControl('');
  maxPriceFilter = new FormControl('');
  availabilityFilter = new FormControl('');

  constructor(private _dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const page = params['page'];
      const size = params['size'];
      this.searchName = params['name'] || '';
      this.searchMinPrice = params['minPrice'] || '';
      this.searchMaxPrice = params['maxPrice'] || '';
      this.searchAvailability = params['isAvailable'] || 'both';
      if (page > 0) {
        this.startingPage = page - 1; 
        this.pageSize = size;
      }

      this.nameFilter.setValue(this.searchName || '');
      this.minPriceFilter.setValue(this.searchMinPrice || '');
      this.maxPriceFilter.setValue(this.searchMaxPrice || '');

      this.refreshTableData();
    })
    this.fieldListener();
  }

  pageChanged(event: PageEvent) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: event.pageIndex + 1,
        size: event.pageSize
      },
      queryParamsHandling: 'merge'
    });
  }

  refreshTableData() {
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

  private fieldListener() {
    this.nameFilter.valueChanges
      .subscribe(
        productName => {     
          this.searchName = productName || '';
        }
      )
      
    this.availabilityFilter.valueChanges
      .subscribe(
        isAvailable => {
          this.searchAvailability = isAvailable || '';
        }
      )
    this.minPriceFilter.valueChanges
      .subscribe(
        minPrice => {
          this.searchMinPrice = minPrice || '';
        }
      )
    this.maxPriceFilter.valueChanges
      .subscribe(
        maxPrice => {
          this.searchMaxPrice = maxPrice || '';
        }
      )
  }

  availabilityChange(event: MatRadioChange) {
    this.searchAvailability = event.value;
  }

  updateQueryParams(queryParams: Object) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }

  clearFilter() {
    this.nameFilter.setValue('');
    this.minPriceFilter.setValue('');
    this.maxPriceFilter.setValue('');
    this.searchName = '';
    this.searchMinPrice = '';
    this.searchMaxPrice = '';
    this.searchAvailability = 'both';
    this.refreshTableData();
    this.updateQueryParams({
      name: null,
      isAvailable: null,
      minPrice: null,
      maxPrice: null
    });
  }

  search() {
    this.refreshTableData();
    this.updateQueryParams({
      name: this.searchName || '',
      isAvailable: this.searchAvailability || 'both',
      minPrice: this.searchMinPrice || '',
      maxPrice: this.searchMaxPrice || ''
    })
  }
}
