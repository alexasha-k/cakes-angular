import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModuleModule } from './material-module/material-module.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { CopyrightComponent } from './common/copyright/copyright.component';
import { SNetworkComponent } from './common/s-network/s-network.component';
import { MainBannerComponent } from './main/main-banner/main-banner.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { OrderComponent } from './main/order/order.component';
import { FeedbackComponent } from './main/feedback/feedback.component';
import { AboutComponent } from './main/about/about.component';
import { AdvantagesComponent } from './main/advantages/advantages.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { IconSvgComponent } from './UI/icon-svg/icon-svg.component';
import { AppRoutingModule } from './/app-routing.module';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CarouselComponent } from './UI/carousel/carousel.component';
import { CarouselDirective } from './UI/carousel/carousel.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CopyrightComponent,
    SNetworkComponent,
    MainBannerComponent,
    CatalogComponent,
    OrderComponent,
    FeedbackComponent,
    AboutComponent,
    AdvantagesComponent,
    ContactsComponent,
    IconSvgComponent,
    CatalogListComponent,
    CarouselComponent,
    CarouselDirective
  ],
  imports: [
    MaterialModuleModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
