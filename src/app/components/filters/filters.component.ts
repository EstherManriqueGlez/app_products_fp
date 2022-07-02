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

  searchName: string = ''
  searchAvailability: string = ''
  searchMinPrice: string = ''
  searchMaxPrice: string =  ''

  nameFilter = new FormControl('');
  minPriceFilter = new FormControl('');
  maxPriceFilter = new FormControl('');

  constructor(private _queryParams: QueryParamsService,  private route: ActivatedRoute) { }

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

    this.fieldListener();

  }

  availabilityChange(event: MatRadioChange) {
    this._queryParams.setSearchAvailabilityParam(event.value || '');
  }

  private fieldListener() {
    this.nameFilter.valueChanges
      .subscribe(
        productName => {     
          this._queryParams.setSearchNameParam(productName || '')
        }
      )
    this.minPriceFilter.valueChanges
      .subscribe(
        minPrice => {
          this._queryParams.setSearchMinPriceParam(minPrice || '');
        }
      )
    this.maxPriceFilter.valueChanges
      .subscribe(
        maxPrice => {
          this._queryParams.setSearchMaxPriceParam(maxPrice || '');
        }
      )
  }

}
