import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  listedDate: Date;
}

@Component({
  selector: 'app-sell',
  standalone: true,
   imports: [CommonModule], 
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Designer Jacket',
      description: 'Stylish black leather jacket, barely used.',
      price: 299,
      imageUrl: 'https://placehold.co/200x200/000/fff?text=Jacket',
      listedDate: new Date('2023-03-01')
    },
    {
      id: 2,
      name: 'Vintage Watch',
      description: 'Classic wristwatch with leather strap.',
      price: 150,
      imageUrl: 'https://placehold.co/200x200/333/fff?text=Watch',
      listedDate: new Date('2022-12-15')
    },
    // Agrega más productos si quieres
  ];

  favorites = new Set<number>(); // Guarda los IDs de productos favoritos

  // Cambia el estado de favorito de un producto
  toggleFavorite(product: Product) {
    if (this.favorites.has(product.id)) {
      this.favorites.delete(product.id);
    } else {
      this.favorites.add(product.id);
    }
  }

  // Comprueba si un producto está marcado como favorito
  isFavorite(product: Product): boolean {
    return this.favorites.has(product.id);
  }

  // Calcula cuánto tiempo lleva listado el producto (días, meses o años)
  getTimeListed(date: Date): string {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 30) {
      return `${diffDays} day(s) ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} month(s) ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} year(s) ago`;
    }
  }

  // Evento para cuando el usuario pide bajar el precio
  onPriceDrop(product: Product) {
    alert(`Request price drop for ${product.name}`);
    // Aquí puedes añadir la lógica que quieras para esta función
  }

  // Evento para cuando el usuario envía una oferta
  onSendOffer(product: Product) {
    alert(`Send offer for ${product.name}`);
    // Aquí puedes añadir la lógica que quieras para esta función
  }
}