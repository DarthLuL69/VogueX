import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-categories',
  standalone: true,
  imports: [],
  templateUrl: './featured-categories.component.html',
  styleUrl: './featured-categories.component.scss'
})
export class FeaturedCategoriesComponent {
  categories = [
    { 
      name: 'Designers', 
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      link: '/designers' 
    },
    { 
      name: 'Outerwear', 
      image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      link: '/outerwear' 
    },
    { 
      name: 'Sneakers', 
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      link: '/sneakers' 
    },
    { 
      name: 'Bottoms', 
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      link: '/bottoms' 
    }
  ];
}
