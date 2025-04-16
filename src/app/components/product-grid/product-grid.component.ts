import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  designer: string;
  price: number;
  image: string;
  link: string;
}

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-grid.component.html'
})
export class ProductGridComponent {
  @Input() title: string = '';
  
  products: Product[] = [
    {
      id: 1,
      name: 'Tech Fleece Hoodie',
      designer: 'Nike',
      price: 120,
      image: 'https://placehold.co/300x300/333/FFF?text=Product+1',
      link: '/product/1'
    },
    {
      id: 2,
      name: 'Oversized T-Shirt',
      designer: 'Balenciaga',
      price: 450,
      image: 'https://placehold.co/300x300/333/FFF?text=Product+2',
      link: '/product/2'
    },
    {
      id: 3,
      name: 'Slim-Fit Jeans',
      designer: 'Acne Studios',
      price: 250,
      image: 'https://placehold.co/300x300/333/FFF?text=Product+3',
      link: '/product/3'
    },
    {
      id: 4,
      name: 'Canvas Sneakers',
      designer: 'Common Projects',
      price: 350,
      image: 'https://placehold.co/300x300/333/FFF?text=Product+4',
      link: '/product/4'
    },
    {
      id: 5,
      name: 'Leather Jacket',
      designer: 'Saint Laurent',
      price: 2950,
      image: 'https://placehold.co/300x300/333/FFF?text=Product+5',
      link: '/product/5'
    },
    {
      id: 6,
      name: 'Logo Cap',
      designer: 'Gucci',
      price: 390,
      image: 'https://placehold.co/300x300/333/FFF?text=Product+6',
      link: '/product/6'
    }
  ];
}
