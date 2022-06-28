import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/interfaces/products';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  listProducts: Producto[] = [];
  displayedColumns: string[] = ['id', 'name', 'price', 'availability'];
  dataSource!: MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.listProducts = this._dataService.getProducts();
    this.dataSource = new MatTableDataSource(this.listProducts)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
