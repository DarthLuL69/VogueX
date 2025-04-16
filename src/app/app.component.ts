import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { CategoryCarouselComponent } from './components/category-carousel/category-carousel.component';
import { ProductGridComponent } from './components/product-grid/product-grid.component';
import { FooterComponent } from './components/footer/footer.component';

interface CategoryItem {
  id: number;
  name: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    HeroCarouselComponent,
    CategoryCarouselComponent,
    ProductGridComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'VogueX';
  
  menswearItems: CategoryItem[] = [
    {
      id: 1,
      name: "Men's Designer Shoe",
      image: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-kQvHIPUQ42wdaH1jwsa6vbjz/user-Fld36Q2SIYSj0LzXSpuC4Mfs/img-SciwNZkdbwzQLp5IhO9oLx8s.png",
      link: "/menswear/shoes"
    },
    {
      id: 2,
      name: "Men's Casual Jacket",
      image: "https://placehold.co/200x200/333/FFF?text=Men's+Jacket",
      link: "/menswear/jackets"
    },
    {
      id: 3,
      name: "Designer Watch",
      image: "https://placehold.co/200x200/222/FFF?text=Watch",
      link: "/menswear/accessories"
    },
    {
      id: 4,
      name: "Premium Denim",
      image: "https://placehold.co/200x200/444/FFF?text=Denim",
      link: "/menswear/pants"
    }
  ];
  
  womenswearItems: CategoryItem[] = [
    {
      id: 1,
      name: "Women's Designer Top",
      image: "https://oaidalleapiprodscus.blob.core.windows.net/private/org-kQvHIPUQ42wdaH1jwsa6vbjz/user-Fld36Q2SIYSj0LzXSpuC4Mfs/img-qfHnsAbF6buJF5o7k0IhsOwb.png",
      link: "/womenswear/tops"
    },
    {
      id: 2,
      name: "Designer Handbag",
      image: "https://placehold.co/200x200/555/FFF?text=Handbag",
      link: "/womenswear/bags"
    },
    {
      id: 3,
      name: "Women's Footwear",
      image: "https://placehold.co/200x200/666/FFF?text=Footwear",
      link: "/womenswear/shoes"
    },
    {
      id: 4,
      name: "Designer Dress",
      image: "https://placehold.co/200x200/777/FFF?text=Dress",
      link: "/womenswear/dresses"
    }
  ];
}
