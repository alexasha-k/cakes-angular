import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CatalogListComponent } from './catalog-list/catalog-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: MainComponent},
  { path: 'catalog/:id', component: CatalogListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollOffset: [40, 40]}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
