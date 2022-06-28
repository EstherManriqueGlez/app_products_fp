import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/products';


const PRODUCT_DATA: Producto[] = [
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


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'availability'];
  dataSource = PRODUCT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
