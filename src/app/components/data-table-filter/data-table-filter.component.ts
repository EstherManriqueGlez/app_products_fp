import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Product } from 'src/app/interfaces/products';

@Component({
  selector: 'app-data-table-filter',
  templateUrl: './data-table-filter.component.html',
  styleUrls: ['./data-table-filter.component.scss']
})
export class DataTableFilterComponent implements OnInit {

  displayedColumns: string[] = ['productName', 'price', 'isAvailable'];

  dataSource!: MatTableDataSource<Product>;
  startingPage: number = 0;
  pageSize: number = 0;
  dataLoading: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  nameFilter = new FormControl('');
  minPriceFilter = new FormControl('');
  maxPriceFilter = new FormControl('');
  availabilityFilter = new FormControl('');

  filterValues: any = {
    productName: '',
    isAvailable: '',
    price: ''
  }

  constructor(private _dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._dataService.getProducts('','','','').subscribe((response) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator.pageSize = this.pageSize;
      this.dataSource.filterPredicate = this.createFilter();
      this.dataSource.filter = this.filterValues;
      this.dataLoading = false;
    });
    this.route.queryParams.subscribe((params) => {
      const page = params['page'];
      const size = params['size'];
      const nameFilter = params['name'];
      const minPriceFilter = params['minPrice'];
      const maxPriceFilter = params['maxPrice'];
      const availabilityFilter = params['isAvailable'];
      if (page > 0) {
        this.startingPage = page - 1;
        this.pageSize = size;
      }

      this.nameFilter.setValue(nameFilter || '');
      this.availabilityFilter.setValue(availabilityFilter || '');
      this.minPriceFilter.setValue(minPriceFilter || '');
      this.maxPriceFilter.setValue(maxPriceFilter || '');
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

  private fieldListener() {
    this.nameFilter.valueChanges
      .subscribe(
        productName => {     
          this.filterValues.productName = productName;
          this.dataSource.filter = this.filterValues;
          this.updateQueryParams({
            name: productName
          })
        }
      )
      
    this.availabilityFilter.valueChanges
      .subscribe(
        isAvailable => {
          this.filterValues.isAvailable = isAvailable;
          this.dataSource.filter = this.filterValues;
          this.updateQueryParams({
            isAvailable: isAvailable
          })
        }
      )
    this.minPriceFilter.valueChanges
      .subscribe(
        minPrice => {
          this.filterValues.minPrice = minPrice;
          this.dataSource.filter = this.filterValues;
          this.updateQueryParams({
            minPrice: minPrice
          })
        }
      )
    this.maxPriceFilter.valueChanges
      .subscribe(
        maxPrice => {
          this.filterValues.maxPrice = maxPrice;
          this.dataSource.filter = this.filterValues;
          this.updateQueryParams({
            maxPrice: maxPrice
          })
        }
      )
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
    this.availabilityFilter.setValue('');
    this.minPriceFilter.setValue('');
    this.maxPriceFilter.setValue('');
  }

  private createFilter(): (product: Product, filter: any) => boolean {
    let filterFunction = function (product: Product, filter: any): boolean {

      let filterByPrice: boolean = false;

      if(filter.minPrice > 0 && filter.maxPrice > filter.minPrice) {
        filterByPrice = true;
      }

      let filterByAvailability: boolean = false;
      let availability: boolean = false;
      if(filter.isAvailable === 'true') {
        availability = true;
        filterByAvailability = true;
      }

      if(filterByAvailability && filterByPrice) {
        return product.productName.trim().toLowerCase().indexOf(filter.productName.trim().toLowerCase()) !== -1
        && product.isAvailable === availability
        && (product.price >= filter.minPrice && product.price <= filter.maxPrice)
      }

      if(filterByPrice) {
        return product.productName.trim().toLowerCase().indexOf(filter.productName.trim().toLowerCase()) !== -1
        && (product.price >= filter.minPrice && product.price <= filter.maxPrice)
      }

      
      if(filterByAvailability) {
        return product.productName.trim().toLowerCase().indexOf(filter.productName.trim().toLowerCase()) !== -1
          && product.isAvailable === availability
      }

      return product.productName.trim().toLowerCase().indexOf(filter.productName.trim().toLowerCase()) !== -1
    }

    return filterFunction;
  }

}
