import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

export interface MainNav {
  name: string;
  alias: string;
  showHeader: boolean;
}

export interface СatalogGroups {
  name: string;
  nameRus: string;
  groupImage: GroupImage;
  quantity: number;
}

export interface GroupImage {
  title: string;
  path: string;
}

export interface CakeFillings {
  name: string;
  nameRus: string;
  description: string;
  imageUrl: string;
  price: number;
  priceUnit: string;
}

export interface CakeSizes {
  size: number;
  diameter: string;
  imageUrl: string;
  persons: string;
}

export interface CakeDecorating {
  name: string;
  nameRus: string;
  imageUrl: string;
  price: number;
  priceUnit: string;
}

@Injectable({
  providedIn: 'root'
})

export class MainNavService {

  constructor(private http: HttpClient) { }

  mainNavUrl = 'api/mainNav';
  getMainNav(): Observable<MainNav[]> {
     return this.http.get<MainNav[]>(this.mainNavUrl);
  }

  phoneNumberUrl = 'api/phoneNumber';
  getPhoneNumber(): Observable<string> {
     return this.http.get<string>(this.phoneNumberUrl);
  }

  catalogGroupsUrl = 'api/catalogGroups';
  getCatalogGroups(): Observable<СatalogGroups> {
     return this.http.get<СatalogGroups>(this.catalogGroupsUrl);
  }

  getCatalogGroup(id: number): Observable<СatalogGroups> {
     const url = `${this.catalogGroupsUrl}/${id}`;
     return this.http.get<СatalogGroups>(url);
  }

  cakeFillingsURL = 'api/cakeFillings';
  getCakeFillings(): Observable<CakeFillings> {
     return this.http.get<CakeFillings>(this.cakeFillingsURL);
  }

  cakeSizesURL = 'api/cakeSizes';
  getCakeSizes(): Observable<CakeSizes> {
     return this.http.get<CakeSizes>(this.cakeSizesURL);
  }

  cakeDecoratingURL = 'api/cakeDecorating';
  getCakeDecorating(): Observable<CakeDecorating> {
     return this.http.get<CakeDecorating>(this.cakeDecoratingURL);
  }
}
