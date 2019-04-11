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

    const catalogGroupsItems = [
      { id: 1, name: 'Classic berry', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 200}, { title: "2kg", price: 300}] },
      { id: 2, name: 'Classic Chocolate', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 180}, { title: "2kg", price: 300}] },
      { id: 3, name: 'Classic orange', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 160}, { title: "2kg", price: 300}] },
      { id: 4, name: 'Red velvet', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 150}, { title: "2kg", price: 300}] },
      { id: 5, name: 'Angel cake', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 120}, { title: "2kg", price: 300}] },
      { id: 6, name: 'Red velvet', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 130}, { title: "2kg", price: 300}] },
      { id: 7, name: 'Three chocolate', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 175}, { title: "2kg", price: 300}] },
      { id: 8, name: 'Classic vanilla', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 102}, { title: "2kg", price: 300}] },
      { id: 9, name: 'Classic citrus', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 85}, { title: "2kg", price: 300}] },
      { id: 10, name: 'Classic cheesecake', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 90}, { title: "2kg", price: 300}] },
      { id: 11, name: 'White Lady Cake', image: 'assets/images/catalog-mousse.png', options: [{ title: "1kg", price: 100}, { title: "2kg", price: 300}] },
      { id: 12, name: 'Almond cake', image: 'assets/images/catalog-mousse.png', options: [{ title: "2kg", price: 110}] }
    ]

    const catalogGroups = [
      { id: 1, name: 'classic', nameRus: 'Classic', items: catalogGroupsItems, groupImage: {title: 'Classic cakes', path: 'assets/images/catalog-classic.png'}, quantity: 24},
      { id: 2, name: 'mousse', nameRus: 'Mousse', items: catalogGroupsItems, groupImage: {title: 'Mousse cakes', path: 'assets/images/catalog-mousse.png'}, quantity: 12},
      { id: 3, name: 'wedding', nameRus: 'For wedding', items: catalogGroupsItems, groupImage: {title: 'Свадебные cakes', path: 'assets/images/catalog-wedding.png'}, quantity: 20},
      { id: 4, name: 'children', nameRus: 'For children', items: catalogGroupsItems, groupImage: {title: 'Cakes for children', path: 'assets/images/catalog-children.png'}, quantity: 16},
      { id: 5, name: 'man', nameRus: 'For men', items: catalogGroupsItems, groupImage: {title: 'Cakes for men', path: 'assets/images/catalog-man.png'}, quantity: 12},
      { id: 6, name: 'woman', nameRus: 'For women', items: catalogGroupsItems, groupImage: {title: 'Cakes for women', path: 'assets/images/catalog-woman.png'}, quantity: 16},
    ];

    const cakeFillings = [
      { name: 'ganache', nameRus: 'Chocolate ganache', description: 'The most chocolate cake among other chocolate cakes!', imageUrl: 'assets/images/filling1.png', price: 1000, priceUnit: 'kg'},
      { name: 'vanilla-cream', nameRus: 'Vanilla cream', description: 'Nobody refuse the piece of this aroma cake', imageUrl: 'assets/images/filling1.png', price: 1500, priceUnit: 'kg'},
      { name: 'berry-cream', nameRus: 'Berry cream', description: 'Forest berries cream - the best filling ever!', imageUrl: 'assets/images/filling1.png', price: 1500, priceUnit: 'kg'}
    ];

    const cakeSizes = [
      { size: 1, diameter: '17-18cm', imageUrl: 'assets/images/cake-1kg.png', persons: '6 servings'},
      { size: 2, diameter: '23-24cm', imageUrl: 'assets/images/cake-2kg.png', persons: '10-12 servings'},
      { size: 5, diameter: '2 tiers 20 and 25cm', imageUrl: 'assets/images/cake-5kg.png', persons: '15-20 servings'},
      { size: 8, diameter: '3 tiers, 30, 25, and 18cm', imageUrl: 'assets/images/cake-8kg.png', persons: '25-30 servings'}
    ];

    const cakeDecorating = [
      { name: 'berry-assorty', nameRus: 'Berry assorty', imageUrl: 'assets/images/Decorating-1.png', price: 700, priceUnit: 'kg'},
      { name: 'marshmallow', nameRus: 'Marshmallow', imageUrl: 'assets/images/Decorating-2.png', price: 500, priceUnit: 'kg'},
      { name: 'chocolate', nameRus: 'Chocolate', imageUrl: 'assets/images/Decorating-1.png', price: 500, priceUnit: 'kg'}
    ];

    return {mainNav, phoneNumber, sNetworkLinks, catalogGroups, cakeFillings, cakeSizes, cakeDecorating};
  }
}
