import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  PRODUCT_DATA: Product[] = [
    {
       "id": "fabb7b91-0329-437f-9f04-9880b3f35047",
       "productName": "Mouse",
       "price": 316,
       "isAvailable": false
    },
    {
       "id": "790843ed-6ad1-4f52-8612-5b8a687c4a5f",
       "productName": "Modern Fresh Sausages",
       "price": 102,
       "isAvailable": true
    },
    {
       "id": "82ec01a5-de78-4731-9eff-79564ef08049",
       "productName": "Cheese",
       "price": 439,
       "isAvailable": true
    },
    {
       "id": "48e9e8cf-384d-4598-af69-708f3415f005",
       "productName": "Bacon",
       "price": 258,
       "isAvailable": true
    },
    {
       "id": "5cc0671b-eeb0-4e2b-a1b5-ae0efa39a806",
       "productName": "Sausages",
       "price": 214,
       "isAvailable": true
    },
    {
       "id": "6226bc63-cdad-4af3-b7dd-20097dbf112c",
       "productName": "Incredible Plastic Pizza",
       "price": 428,
       "isAvailable": false
    },
    {
       "id": "910dc06f-f4ef-4913-8321-9ffa4aa04f01",
       "productName": "Handcrafted Rubber Car",
       "price": 148,
       "isAvailable": false
    },
    {
       "id": "190ff0a2-127a-425e-9ed7-6ecdb1d4eed1",
       "productName": "Car",
       "price": 163,
       "isAvailable": false
    },
    {
       "id": "1be5d6d0-366b-49c6-8543-b9e2f541f367",
       "productName": "Sleek Cotton Bike",
       "price": 416,
       "isAvailable": false
    },
    {
       "id": "6498ff48-3573-4ea7-9733-151f968c6eee",
       "productName": "Oriental Soft Soap",
       "price": 310,
       "isAvailable": true
    },
    {
       "id": "cca7a957-a06e-4d7b-9279-32db846e22f3",
       "productName": "Chicken",
       "price": 115,
       "isAvailable": false
    },
    {
       "id": "6033b5ba-e56e-4699-a0be-d2af09ca706d",
       "productName": "Hat",
       "price": 199,
       "isAvailable": false
    },
    {
       "id": "ec747557-0b29-4e18-9fa3-353e15918bb7",
       "productName": "Soap",
       "price": 296,
       "isAvailable": false
    },
    {
       "id": "06148fb1-a08b-4e14-954a-f140f75986bb",
       "productName": "Computer",
       "price": 95,
       "isAvailable": false
    },
    {
       "id": "1b2b1a59-9a6c-42ab-95ad-fa1d155cf91a",
       "productName": "Ergonomic Wooden Soap",
       "price": 371,
       "isAvailable": false
    },
    {
       "id": "74c96438-de16-458b-b217-b40770355d52",
       "productName": "Unbranded Granite Towels",
       "price": 347,
       "isAvailable": false
    },
    {
       "id": "693c6760-4c41-43ad-ba91-5af11a69ee1b",
       "productName": "Ball",
       "price": 467,
       "isAvailable": false
    },
    {
       "id": "85c6378c-ada6-4be0-893a-66992245eb7c",
       "productName": "Gloves",
       "price": 270,
       "isAvailable": true
    },
    {
       "id": "bc6dfd61-5fc0-415d-8c1d-0f2b4e224c35",
       "productName": "Ergonomic Steel Cheese",
       "price": 135,
       "isAvailable": false
    },
    {
       "id": "66e664ca-9057-4afc-98d3-fbf433dfc0da",
       "productName": "Chair",
       "price": 53,
       "isAvailable": true
    },
    {
       "id": "c0c7d3f5-2094-49fd-93fc-6f1b4ca65511",
       "productName": "Practical Frozen Cheese",
       "price": 202,
       "isAvailable": false
    },
    {
       "id": "abbd234c-03f0-4be6-8023-230296f613e1",
       "productName": "Ergonomic Soft Gloves",
       "price": 64,
       "isAvailable": true
    },
    {
       "id": "62e50b1f-9a3b-486f-b2d8-e7e60834b74f",
       "productName": "Luxurious Granite Soap",
       "price": 48,
       "isAvailable": true
    },
    {
       "id": "68def074-10ed-4094-a068-eaa04442f393",
       "productName": "Recycled Granite Shirt",
       "price": 210,
       "isAvailable": true
    },
    {
       "id": "52ee4ea0-512b-437d-a866-1a302bbfdc87",
       "productName": "Table",
       "price": 387,
       "isAvailable": false
    }
 ]



  constructor() { }

  getProducts() {
    return this.PRODUCT_DATA.slice();
  }
}
