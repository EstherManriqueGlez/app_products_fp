import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { QueryParamsService } from 'src/app/services/query-params.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  searchName: string = '';
  searchAvailability: string = '';
  searchMinPrice: string = '';
  searchMaxPrice: string = '';

  nameFilter = new FormControl('');
  minPriceFilter = new FormControl('');
  maxPriceFilter = new FormControl('');

  constructor(private _queryParams: QueryParamsService, private route: ActivatedRoute) { };

  ngOnInit(): void {
     // Get search variables (filters) from shared service
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

    // Run inputs change listener function
    this.fieldListener();
  };

  // listen change in availability radio
  availabilityChange(event: MatRadioChange): void {
    this._queryParams.setSearchAvailabilityParam(event.value || ''); // update global sharedAvailability variable (service)
  };

  private fieldListener(): void {
    // listen product name input change
    this.nameFilter.valueChanges
      .subscribe(
        productName => {
          this._queryParams.setSearchNameParam(productName || ''); // update filter sharedProductName variable (service)
        }
      );
    // listen product min price input change
    this.minPriceFilter.valueChanges
      .subscribe(
        minPrice => {
          this._queryParams.setSearchMinPriceParam(minPrice || ''); // update filter sharedMinPrice variable (service)
        }
      );
    // listen product max price input change
    this.maxPriceFilter.valueChanges
      .subscribe(
        maxPrice => {
          this._queryParams.setSearchMaxPriceParam(maxPrice || ''); // update filter sharedMaxPrice variable (service)
        }
      );
  };
};
