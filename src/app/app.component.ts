import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Category } from './category';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza';
  Items: MenuItem[];

  constructor() {
    this.Items = [
                  {ItemName: 'Chicken Fingers', ItemCategory: Category[Category.dinner], ItemPrice: 11.99 },
                  {ItemName: 'Pizza', ItemCategory: Category[Category.dinner], ItemPrice: 11.99 },
                  {ItemName: 'Wings', ItemCategory: Category[Category.sides], ItemPrice: 8.99 },
                  {ItemName: 'Breadsticks', ItemCategory: Category[Category.sides], ItemPrice: 4.99 },
                  {ItemName: 'Ceasar Salad', ItemCategory: Category[Category.salads], ItemPrice: 5.99 },
                  {ItemName: 'Cinnamon Roll', ItemCategory: Category[Category.dessert], ItemPrice: 8.99 },
                  {ItemName: 'Chicken Biryani', ItemCategory: Category[Category.dinner], ItemPrice: 11.99 }
                 ]
  }

}
