import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  private base_url = 'https://my-json-server.typicode.com/fernandoAlonsoV/AngularProjectMockedData/products';

  constructor(private httpClient: HttpClient) { }

  getProducts(
    name: string,
    availability: string,
    minPrice: string,
    maxPrice: string
  ): Observable<Product[]> {
    
    let url = `${this.base_url}?`;
    if(name) {
      url += `&productName_like=${name}`
    }
    if(minPrice) {
      url += `&price_gte=${minPrice}`
    }
    if(maxPrice) {
      url += `&price_lte=${maxPrice}`
    }
    if(availability && (availability === 'true' || availability === 'false')) {
      url += `&isAvailable=${availability}`
    }
    return this.httpClient.get<Product[]>(url);
  }
}
