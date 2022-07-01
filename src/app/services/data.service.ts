import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {

   private url = 'https://my-json-server.typicode.com/fernandoAlonsoV/AngularProjectMockedData/products';


  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
   return this.httpClient.get<Product[]>(this.url);
   
  }
}
