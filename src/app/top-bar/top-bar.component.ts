import { Component } from '@angular/core';
import { products } from '../products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  products = [...products];
  share() {
    window.alert('The product has been shared!');
  }
}
