import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'productFilter' })
export class ProductFilterPipe implements PipeTransform {
  transform(products: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return products;
    }
    
    searchTerm = searchTerm.toLowerCase();
    return products.filter(product => product.name.toLowerCase().includes(searchTerm));
  }
}

// <input type="text" [(ngModel)]="searchTerm">

// <ul>
//   <li *ngFor="let product of products | productFilter: searchTerm">{{ product.name }}</li>
// </ul>
