import { NgModule } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule, Routes, Router, Scroll } from '@angular/router';

import { Observable, from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CartComponent } from './cart/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: MainComponent},
  { path: 'catalog/:id', component: CatalogListComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 100],
    scrollPositionRestoration: 'enabled'
  }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

    constructor(router: Router, viewportScroller: ViewportScroller) {
      router.events.pipe(
        filter((e: any): e is Scroll => e instanceof Scroll)
      ).subscribe(e => {
        if (e.position) {
          viewportScroller.scrollToPosition(e.position); // backward navigation
        } else if (e.anchor) {
          //document.querySelector('#'+e.anchor).scrollIntoView({ behavior: 'smooth', block: 'start' })
          viewportScroller.scrollToAnchor(e.anchor); // anchor navigation
        } else {
          viewportScroller.scrollToPosition([0, 0]); // forward navigation
        }
      });
    }
}
