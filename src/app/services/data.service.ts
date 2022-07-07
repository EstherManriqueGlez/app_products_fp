import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private base_url = 'https://my-json-server.typicode.com/fernandoAlonsoV/AngularProjectMockedData/products';

  constructor(private httpClient: HttpClient) { };

  getProducts(
    name: string,
    availability: string,
    minPrice: string,
    maxPrice: string,
  ): Observable<Product[]> {

    let url = `${this.base_url}?`;
    if (name) { // concat productName_like parameter if name has value
      url += `&productName_like=^${name}`;
    };
    if (minPrice) { // concat price_gte (min price) parameter if minPrice has value
      url += `&price_gte=${minPrice}`;
    };
    if (maxPrice) { // concat price_lte (max price) parameter if maxPrice has value
      url += `&price_lte=${maxPrice}`;
    };
    if (availability && (availability === 'true' || availability === 'false')) { // concat isAvailable parameter if availability has value === true or === false
      url += `&isAvailable=${availability}`;
    };
    return this.httpClient.get<Product[]>(url); // Run request using httpClient
  };
};
