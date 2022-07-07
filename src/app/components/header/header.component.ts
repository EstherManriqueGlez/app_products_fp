import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParamsService } from 'src/app/services/query-params.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchName: string = '';
  searchAvailability: string = '';
  searchMinPrice: string = '';
  searchMaxPrice: string =  '';

  constructor(private _queryParams: QueryParamsService, private router: Router, private route: ActivatedRoute) { };

  ngOnInit(): void {
    // Get search variables (filter) from shared service
    this._queryParams.currentSearchNameParam.subscribe((name) => {
      this.searchName = name;
    });
    this._queryParams.currentSearchMinPriceParam.subscribe((minPrice) => {
      this.searchMinPrice = minPrice;
    });
    this._queryParams.currentSearchMaxPriceParam.subscribe((maxPrice) => {
      this.searchMaxPrice = maxPrice;
    });
    this._queryParams.currentSearchAvailabilityParam.subscribe((availability) => {
      this.searchAvailability = availability;
    });
  };

  // handle clear button callback
  clearFilter(): void {
    // update search filter variables (service) - Clean up values
    this._queryParams.setSearchAvailabilityParam('both');
    this._queryParams.setSearchNameParam('');
    this._queryParams.setSearchMinPriceParam('');
    this._queryParams.setSearchMaxPriceParam('');
    this.updateQueryParams({ // remove query params from url
      name: null,
      isAvailable: null,
      minPrice: null,
      maxPrice: null,
    });
  };

  // handle search button callback
  search(): void {
    this.updateQueryParams({ // update query params with the value of the search filters
      name: this.searchName || '',
      isAvailable: this.searchAvailability || 'both',
      minPrice: this.searchMinPrice || '',
      maxPrice: this.searchMaxPrice || '',
    });
  };

  // helper funciton to update query params
  updateQueryParams(queryParams: Object): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  };
};
