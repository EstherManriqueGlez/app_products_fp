import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataTableFilterBeComponent } from './components/data-table-filter-be/data-table-filter-be.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { DataService } from './services/data.service';
import { QueryParamsService } from './services/query-params.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DataTableFilterBeComponent,
    HeaderComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DataService,
    QueryParamsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };
