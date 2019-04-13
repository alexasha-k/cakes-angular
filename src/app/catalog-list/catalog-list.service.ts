import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MainNavService } from '../main-nav.service';

import { Observable, from } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CatalogListService {

  constructor(private http: HttpClient) { }

  //Rx.Observable.from(catalogGroup).pipe(
  //  filter(catalogGroup => catalogGroup.options[0].price > 100)
  //).subscribe(catalogGroup => console.log(catalogGroup));
}
