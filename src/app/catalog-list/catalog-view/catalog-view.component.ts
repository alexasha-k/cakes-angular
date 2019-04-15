import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-catalog-view',
  templateUrl: './catalog-view.component.html',
  styleUrls: ['./catalog-view.component.scss']
})
export class CatalogViewComponent implements OnInit {

  @Output() changeCatalogView = new EventEmitter<string>();
  @Output() changeCatalogSort = new EventEmitter<string>();

  constructor() { }

  viewTypes = [ "Grid", "List"];
  viewType: string = "Grid";

  setView(view: string = viewTypes[0]): void {
    if (this.viewType === view) return false;
    this.changeCatalogView.emit(view)
    this.viewType = view;
  }

  sortTypes = [ "Price", "Size"];
  sortType: string;

  setSortType(sort: string): void {
    if (this.sortType === sort) return false;
    this.changeCatalogSort.emit(sort)
    this.sortType = sort;
  }

  ngOnInit() {
  }

}
