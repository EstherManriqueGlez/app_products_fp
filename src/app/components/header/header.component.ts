import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParamsService } from 'src/app/services/query-params.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchName: string = ''
  searchAvailability: string = ''
  searchMinPrice: string = ''
  searchMaxPrice: string =  ''

  constructor(private _queryParams: QueryParamsService, private router: Router, private route: ActivatedRoute) { }

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
  }


  clearFilter() {
    this._queryParams.setSearchAvailabilityParam('both');
    this._queryParams.setSearchNameParam('');
    this._queryParams.setSearchMinPriceParam('');
    this._queryParams.setSearchMaxPriceParam('');
    this.updateQueryParams({
      name: null,
      isAvailable: null,
      minPrice: null,
      maxPrice: null
    });
  }

  search() {
    this.updateQueryParams({
      name: this.searchName || '',
      isAvailable: this.searchAvailability || 'both',
      minPrice: this.searchMinPrice || '',
      maxPrice: this.searchMaxPrice || ''
    })
  }

  updateQueryParams(queryParams: Object) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }

}
