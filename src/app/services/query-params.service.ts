import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryParamsService {

  // initialize global search variables
  private searchNameParam = new BehaviorSubject('');
  private searchMinPriceParam = new BehaviorSubject('');
  private searchMaxPriceParam = new BehaviorSubject('');
  private searchAvailabilityParam = new BehaviorSubject('');

  // set variables observables
  currentSearchNameParam = this.searchNameParam.asObservable();
  currentSearchMinPriceParam = this.searchMinPriceParam.asObservable();
  currentSearchMaxPriceParam = this.searchMaxPriceParam.asObservable();
  currentSearchAvailabilityParam = this.searchAvailabilityParam.asObservable();

  constructor() { }

  // define variables setters
  setSearchNameParam(name: string): void {
    this.searchNameParam.next(name);
  }
  setSearchMinPriceParam(minPrice: string): void {
    this.searchMinPriceParam.next(minPrice);
  }
  setSearchMaxPriceParam(maxPrice: string): void {
    this.searchMaxPriceParam.next(maxPrice);
  }
  setSearchAvailabilityParam(availability: string): void {
    this.searchAvailabilityParam.next(availability);
  }
}
