import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryParamsService {

  private searchNameParam = new BehaviorSubject('')
  private searchMinPriceParam = new BehaviorSubject('')
  private searchMaxPriceParam = new BehaviorSubject('')
  private searchAvailabilityParam = new BehaviorSubject('')
  
  currentSearchNameParam = this.searchNameParam.asObservable();
  currentSearchMinPriceParam = this.searchMinPriceParam.asObservable();
  currentSearchMaxPriceParam = this.searchMaxPriceParam.asObservable();
  currentSearchAvailabilityParam = this.searchAvailabilityParam.asObservable();

  constructor() { }

  setSearchNameParam(name: string) {
    this.searchNameParam.next(name);
  }
  setSearchMinPriceParam(minPrice: string) {
    this.searchMinPriceParam.next(minPrice);
  }
  setSearchMaxPriceParam(maxPrice: string) {
    this.searchMaxPriceParam.next(maxPrice);
  }
  setSearchAvailabilityParam(availability: string) {
    this.searchAvailabilityParam.next(availability);
  }
}
