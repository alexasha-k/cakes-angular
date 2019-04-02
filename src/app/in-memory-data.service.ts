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
      { name: 'Наши торты', alias: 'main-page-catalog', showHeader: true },
      { name: 'Индивидуальный заказ', alias: 'main-page-order', showHeader: true },
      { name: 'Отзывы', alias: 'main-page-feedbacks', showHeader: true },
      { name: 'О нас', alias: 'main-page-about', showHeader: true },
      { name: 'Как заказать', alias: 'main-page-order-rules', showHeader: true },
      { name: 'Контакты', alias: 'main-page-contacts', showHeader: true }
    ];

    const sNetworkLinks = [
      { name: 'Vkontakte', iconPath: 'icon-vk.svg', link: 'vk.com'},
      { name: 'Instagram', iconPath: 'icon-insta.svg', link: 'vk.com'}
    ];

    const catalogGroups = [
      { name: 'classic', nameRus: 'Классические', groupImage: {title: 'Классические торты', path: 'assets/images/catalog-classic.png'}, quantity: 24},
      { name: 'mousse', nameRus: 'Муссовые', groupImage: {title: 'Муссовые торты', path: 'assets/images/catalog-mousse.png'}, quantity: 12},
      { name: 'wedding', nameRus: 'Свадебные', groupImage: {title: 'Свадебные торты', path: 'assets/images/catalog-wedding.png'}, quantity: 20},
      { name: 'children', nameRus: 'Детям', groupImage: {title: 'Торты детям', path: 'assets/images/catalog-children.png'}, quantity: 16},
      { name: 'man', nameRus: 'Мужчинам', groupImage: {title: 'Торты мужчинам', path: 'assets/images/catalog-man.png'}, quantity: 12},
      { name: 'woman', nameRus: 'Женщинам', groupImage: {title: 'Торты женщинам', path: 'assets/images/catalog-woman.png'}, quantity: 16},
    ];

    const cakeFillings = [
      { name: 'ganache', nameRus: 'Шоколадный ганаш', description: 'Ароматный шоколадный бисквит, густой шоколадный крем – самый шоколадный из всех возможных десертов!', imageUrl: 'assets/images/catalog-woman.png', price: 1000, priceUnit: 'kg'},
      { name: 'vanilla-cream', nameRus: 'Ванильный крем', description: 'Ароматный шоколадный бисквит, густой шоколадный крем – самый шоколадный из всех возможных десертов!', imageUrl: 'assets/images/catalog-woman.png', price: 1500, priceUnit: 'kg'},
      { name: 'berry-cream', nameRus: 'Ягодный крем', description: 'Ароматный шоколадный бисквит, густой шоколадный крем – самый шоколадный из всех возможных десертов!', imageUrl: 'assets/images/catalog-woman.png', price: 1500, priceUnit: 'kg'}
    ];

    const cakeSizes = [
      { size: 1, diameter: '17-18см', imageUrl: 'assets/images/catalog-woman.png', persons: '6 персон'},
      { size: 2, diameter: '17-18см', imageUrl: 'assets/images/catalog-woman.png', persons: '10-12 персон'},
      { size: 5, diameter: '17-18см', imageUrl: 'assets/images/catalog-woman.png', persons: '20-30 персон'},
      { size: 10, diameter: '17-18см', imageUrl: 'assets/images/catalog-woman.png', persons: '40-60 персон'}
    ];

    const cakeDecoration = [
      { name: 'berry-assorty', nameRus: 'Ягодное ассорти', imageUrl: 'assets/images/catalog-woman.png', price: 700, priceUnit: 'kg'},
      { name: 'marshmellow', nameRus: 'Маршмеллоу', imageUrl: 'assets/images/catalog-woman.png', price: 500, priceUnit: 'kg'},
      { name: 'chocolate', nameRus: 'Шоколад', imageUrl: 'assets/images/catalog-woman.png', price: 500, priceUnit: 'kg'}
    ];

    return {mainNav, phoneNumber, sNetworkLinks, catalogGroups, cakeFillings, cakeSizes, cakeDecoration};
  }
}
