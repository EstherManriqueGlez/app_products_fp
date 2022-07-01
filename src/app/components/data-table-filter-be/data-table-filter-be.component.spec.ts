import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableFilterBeComponent } from './data-table-filter-be.component';

describe('DataTableFilterComponent', () => {
  let component: DataTableFilterBeComponent;
  let fixture: ComponentFixture<DataTableFilterBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableFilterBeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTableFilterBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
