import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { OrderDialogComponent } from './main/order/order-dialog/order-dialog.component';
import { CatalogNavComponent } from './catalog-list/catalog-nav/catalog-nav.component';
import { CatalogFiltersComponent } from './catalog-list/catalog-filters/catalog-filters.component';
import { SidebarBannerComponent } from './common/sidebar-banner/sidebar-banner.component';
import { CatalogViewComponent } from './catalog-list/catalog-view/catalog-view.component';
import { CatalogItemsComponent } from './catalog-list/catalog-items/catalog-items.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { CatalogCardComponent } from './catalog-list/catalog-card/catalog-card.component';
import { CartIconComponent } from './cart/cart-icon/cart-icon.component';
import { CartComponent } from './cart/cart/cart.component';
import { ScrollPositionDirective } from './scroll-position.directive';
import { LazyLoadImageDirective } from './lazy-load-image.directive';


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
    OrderDialogComponent,
    CatalogNavComponent,
    CatalogFiltersComponent,
    SidebarBannerComponent,
    CatalogViewComponent,
    CatalogItemsComponent,
    RecipeBookComponent,
    CatalogCardComponent,
    CartIconComponent,
    CartComponent,
    ScrollPositionDirective,
    LazyLoadImageDirective
  ],
  imports: [
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
    AppRoutingModule,
    SwiperModule
  ],
  entryComponents: [OrderComponent, OrderDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
