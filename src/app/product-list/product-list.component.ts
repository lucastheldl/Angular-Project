import { Component } from '@angular/core';
import { products } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products = [...products];
  share() {
    window.alert('The product has been shared!');
  }
}
