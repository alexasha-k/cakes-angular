import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { Config } from './main-nav-service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {

    const phoneNumber = '+7 926 255 4218';

    const mainNav = [
      { name: 'Cakes', alias: 'main-page-catalog', showHeader: true },
      { name: 'Order', alias: 'main-page-order', showHeader: true },
      { name: 'Feedbacks', alias: 'main-page-feedbacks', showHeader: true },
      { name: 'About', alias: 'main-page-about', showHeader: true },
      { name: 'How to order', alias: 'main-page-order-rules', showHeader: true },
      { name: 'Contacts', alias: 'main-page-contacts', showHeader: true }
    ];

    const sNetworkLinks = [
      { name: 'Vkontakte', iconPath: 'icon-vk.svg', link: 'vk.com'},
      { name: 'Instagram', iconPath: 'icon-insta.svg', link: 'instagram.com'}
    ];

    const catalogGroups = [
      { name: 'classic', nameRus: 'Classic', groupImage: {title: 'Classic cakes', path: 'assets/images/catalog-classic.png'}, quantity: 24},
      { name: 'mousse', nameRus: 'Mousse', groupImage: {title: 'Mousse cakes', path: 'assets/images/catalog-mousse.png'}, quantity: 12},
      { name: 'wedding', nameRus: 'For wedding', groupImage: {title: 'Свадебные cakes', path: 'assets/images/catalog-wedding.png'}, quantity: 20},
      { name: 'children', nameRus: 'For children', groupImage: {title: 'Cakes for children', path: 'assets/images/catalog-children.png'}, quantity: 16},
      { name: 'man', nameRus: 'For men', groupImage: {title: 'Cakes for men', path: 'assets/images/catalog-man.png'}, quantity: 12},
      { name: 'woman', nameRus: 'For women', groupImage: {title: 'Cakes for women', path: 'assets/images/catalog-woman.png'}, quantity: 16},
    ];

    const cakeFillings = [
      { name: 'ganache', nameRus: 'Chocolate ganache', description: 'The most chocolate cake among other chocolate cakes!', imageUrl: 'assets/images/catalog-woman.png', price: 1000, priceUnit: 'kg'},
      { name: 'vanilla-cream', nameRus: 'Vanilla cream', description: 'Nobody refuse the piece of this aroma cake', imageUrl: 'assets/images/catalog-woman.png', price: 1500, priceUnit: 'kg'},
      { name: 'berry-cream', nameRus: 'Berry cream', description: 'Forest berries cream - the best filling ever!', imageUrl: 'assets/images/catalog-woman.png', price: 1500, priceUnit: 'kg'}
    ];

    const cakeSizes = [
      { size: 1, diameter: '17-18cm', imageUrl: 'assets/images/catalog-woman.png', persons: '6 servings'},
      { size: 2, diameter: '20-24cm', imageUrl: 'assets/images/catalog-woman.png', persons: '10-12 servings'},
      { size: 5, diameter: '20-24cm, plus 16cm', imageUrl: 'assets/images/catalog-woman.png', persons: '20-30 servings'},
      { size: 10, diameter: '3 levels', imageUrl: 'assets/images/catalog-woman.png', persons: '40-60 servings'}
    ];

    const cakeDecoration = [
      { name: 'berry-assorty', nameRus: 'Berry assorty', imageUrl: 'assets/images/catalog-woman.png', price: 700, priceUnit: 'kg'},
      { name: 'marshmallow', nameRus: 'Marshmallow', imageUrl: 'assets/images/catalog-woman.png', price: 500, priceUnit: 'kg'},
      { name: 'chocolate', nameRus: 'Chocolate', imageUrl: 'assets/images/catalog-woman.png', price: 500, priceUnit: 'kg'}
    ];

    return {mainNav, phoneNumber, sNetworkLinks, catalogGroups, cakeFillings, cakeSizes, cakeDecoration};
  }
}
