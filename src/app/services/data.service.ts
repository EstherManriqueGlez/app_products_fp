import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/products';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  PRODUCT_DATA: Producto[] = [
    {id: 1, name: 'Hydrogen', price: 1.0079, availability: true},
    {id: 2, name: 'Helium', price: 4.0026, availability: false},
    {id: 3, name: 'Lithium', price: 6.941, availability: false},
    {id: 4, name: 'Beryllium', price: 9.0122, availability: true},
    {id: 5, name: 'Boron', price: 10.811, availability: true},
    {id: 6, name: 'Carbon', price: 12.0107, availability: true},
    {id: 7, name: 'Nitrogen', price: 14.0067, availability: true},
    {id: 8, name: 'Oxygen', price: 15.9994, availability: true},
    {id: 9, name: 'Fluorine', price: 18.9984, availability: true},
    {id: 10, name: 'Neon', price: 20.1797, availability: true},
  ];

  // const PRODUCT_DATA: Producto[] = [
//   {
//      "id": "81aa7782-885c-4afe-8cee-4ec800f00591",
//      "productName": "Car",
//      "price": 433,
//      "isAvaliable": false
//   },
//   {
//      "id": "da9cb3fc-9bf2-47ea-8c5b-7930ab21344e",
//      "productName": "Bacon",
//      "price": 216,
//      "isAvaliable": false
//   },
//   {
//      "id": "e76db9ed-b9cb-4754-9223-dfe855a402fe",
//      "productName": "Sleek Bronze Car",
//      "price": 251,
//      "isAvaliable": false
//   },
//   {
//      "id": "534c12ca-df95-47d3-93a0-5cf22ee24bd7",
//      "productName": "Gorgeous Concrete Ball",
//      "price": 398,
//      "isAvaliable": false
//   },
//   {
//      "id": "a57a0319-3aa9-42d9-8a18-34472a945d74",
//      "productName": "Shirt",
//      "price": 238,
//      "isAvaliable": true
//   },
//   {
//      "id": "9d3a50cb-b8e9-46f0-a2f4-9ebba0ce1f5d",
//      "productName": "Salad",
//      "price": 87,
//      "isAvaliable": false
//   },
//   {
//      "id": "377a0f0c-5d29-42bb-ad12-32ea684e8270",
//      "productName": "Modern Wooden Car",
//      "price": 74,
//      "isAvaliable": false
//   },
//   {
//      "id": "1cdbe881-8c15-43f3-971a-c85e7ed66acc",
//      "productName": "Fantastic Cotton Gloves",
//      "price": 70,
//      "isAvaliable": false
//   },
//   {
//      "id": "c1b67c09-ed67-4aff-be36-89d149b9aa41",
//      "productName": "Handcrafted Metal Tuna",
//      "price": 352,
//      "isAvaliable": true
//   },
//   {
//      "id": "f436fae8-2ed4-4c74-82b1-3d0de3f01730",
//      "productName": "Table",
//      "price": 249,
//      "isAvaliable": false
//   },
//   {
//      "id": "6ad88980-bbc5-4325-bf05-291f83cc1b44",
//      "productName": "Sleek Concrete Bike",
//      "price": 250,
//      "isAvaliable": false
//   },
//   {
//      "id": "e4eb839f-f124-4d52-9f41-91c5b8302c66",
//      "productName": "Generic Plastic Table",
//      "price": 435,
//      "isAvaliable": false
//   },
//   {
//      "id": "761a645a-1aa0-4580-bac9-f15430244977",
//      "productName": "Chicken",
//      "price": 398,
//      "isAvaliable": true
//   },
//   {
//      "id": "228e9422-9090-4130-a5b0-55dbc29c0149",
//      "productName": "Gorgeous Concrete Chicken",
//      "price": 209,
//      "isAvaliable": true
//   },
//   {
//      "id": "f73313c1-a75d-40ec-85f4-af71a8668138",
//      "productName": "Sausages",
//      "price": 162,
//      "isAvaliable": false
//   },
//   {
//      "id": "f5f12c8e-98e3-40c0-8701-d70dfd87ed13",
//      "productName": "Bike",
//      "price": 249,
//      "isAvaliable": false
//   },
//   {
//      "id": "a9c40963-a347-4eab-a6a9-f8c5dcb4b040",
//      "productName": "Cheese",
//      "price": 152,
//      "isAvaliable": true
//   },
//   {
//      "id": "d74ecbbf-f336-4983-b5bf-ccdbc828f46e",
//      "productName": "Keyboard",
//      "price": 66,
//      "isAvaliable": true
//   },
//   {
//      "id": "04ff7c89-0486-4deb-aa7a-341651e79607",
//      "productName": "Electronic Granite Bacon",
//      "price": 132,
//      "isAvaliable": true
//   },
//   {
//      "id": "e995b01d-de7b-4d94-a4b2-f2b77426ce37",
//      "productName": "Unbranded Wooden Chair",
//      "price": 257,
//      "isAvaliable": false
//   },
//   {
//      "id": "a9df09bb-46fa-400b-9ea7-5d2783439605",
//      "productName": "Oriental Soft Mouse",
//      "price": 141,
//      "isAvaliable": false
//   },
//   {
//      "id": "1446ee2f-84cf-43b5-811c-36838344f6f6",
//      "productName": "Licensed Steel Gloves",
//      "price": 490,
//      "isAvaliable": false
//   },
//   {
//      "id": "b7643548-9a26-437a-b703-858ee9e4646d",
//      "productName": "Chips",
//      "price": 176,
//      "isAvaliable": true
//   },
//   {
//      "id": "d691559d-7d7b-41aa-8c58-6e02bbdf0e2d",
//      "productName": "Pizza",
//      "price": 200,
//      "isAvaliable": true
//   },
//   {
//      "id": "ba46ed26-259e-4da3-a11f-e317cde3f9ed",
//      "productName": "Small Concrete Pants",
//      "price": 193,
//      "isAvaliable": true
//   }
// ]

  constructor() { }

  getProducts() {
    return this.PRODUCT_DATA.slice();
  }
}
