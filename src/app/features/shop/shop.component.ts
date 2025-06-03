import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FavoriteService } from '../../shared/services/favorite.service';
import { GrailedApiService } from '../../shared/services/grailed-api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Tienda</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Filtros -->
        <aside class="md:col-span-1 space-y-6">

          <!-- Department Filter -->
          <div class="bg-gray-200 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Departament</h3>
            <ul class="space-y-1">
              <li><label><input type="checkbox" class="mr-2"> Menswear</label></li>
              <li><label><input type="checkbox" class="mr-2"> Womenswear</label></li>
            </ul>
          </div>

          <!-- Category Filter -->
          <div class="bg-gray-200 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Category</h3>
            <ul class="space-y-1">
              <li class="font-bold mt-2">Menswear</li>
              <li><label><input type="checkbox" class="mr-2"> All Tops</label></li>
              <li><label><input type="checkbox" class="mr-2"> Long Sleeve T-Shirts</label></li>
              <li><label><input type="checkbox" class="mr-2"> Hoodies</label></li>
              <li><label><input type="checkbox" class="mr-2"> Shirts (Button Ups)</label></li>
              <li><label><input type="checkbox" class="mr-2"> Short Sleeve T-Shirts</label></li>
              <li><label><input type="checkbox" class="mr-2"> Sweaters & Knitwear</label></li>
              <li><label><input type="checkbox" class="mr-2"> Sweatshirts & Hoodies</label></li>
              <li><label><input type="checkbox" class="mr-2"> Sweatshirts & Hoodies</label></li>
              <li class="font-bold mt-2">Bottoms</li>
              <li class="font-bold mt-2">Outerwear</li>
              <li class="font-bold mt-2">Footwear</li>
              <li class="font-bold mt-2">Tailoring</li>
              <li><label><input type="checkbox" class="mr-2"> All Tops</label></li>
              <li><label><input type="checkbox" class="mr-2"> Long Sleeve T-Shirts</label></li>
              <li><label><input type="checkbox" class="mr-2"> Hoodies</label></li>
              <li><label><input type="checkbox" class="mr-2"> Shirts (Button Ups)</label></li>
              <li><label><input type="checkbox" class="mr-2"> Short Sleeve T-Shirts</label></li>
              <li><label><input type="checkbox" class="mr-2"> Sweaters & Knitwear</label></li>
              <li><label><input type="checkbox" class="mr-2"> Sweatshirts & Hoodies</label></li>
              <li><label><input type="checkbox" class="mr-2"> Sweatshirts & Hoodies</label></li>
              <li class="font-bold mt-2">Bottoms</li>
              <li class="font-bold mt-2">Outerwear</li>
              <li class="font-bold mt-2">Dresses</li>
              <li class="font-bold mt-2">Footwear</li>
              <li class="font-bold mt-2">Accessories</li>
              <li class="font-bold mt-2">Bags & luggage</li>
              <li><label><input type="checkbox" class="mr-2"> Jewelry</label></li>
            </ul>
          </div>

          <!-- Size Filter -->
          <div class="bg-gray-200 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Size</h3>
            <ul class="space-y-1">
               <li class="font-bold mt-2">Menswear</li>
               <li class="font-bold mt-2">Tops</li>
              <li><label><input type="checkbox" class="mr-2"> XXS/40</label></li>
              <li><label><input type="checkbox" class="mr-2"> XS/42</label></li>
              <li><label><input type="checkbox" class="mr-2"> S/44-46</label></li>
              <li><label><input type="checkbox" class="mr-2"> M/48-50</label></li>
              <li><label><input type="checkbox" class="mr-2"> L/52-54</label></li>
              <li><label><input type="checkbox" class="mr-2"> XL/56</label></li>
              <li><label><input type="checkbox" class="mr-2"> XXL/58</label></li>
               <li class="font-bold mt-2">Bottoms</li>
               <li class="font-bold mt-2">Outerwear</li>
               <li class="font-bold mt-2">Footwear</li>
               <li class="font-bold mt-2">Tailoring</li>
               <li class="font-bold mt-2">Accessories</li>
               <li class="font-bold mt-2">Womenswear</li>
               <li class="font-bold mt-2">Tops</li>
               <li class="font-bold mt-2">Bottoms</li>
               <li class="font-bold mt-2">Outerwear</li>
               <li class="font-bold mt-2">Dresses</li>
               <li class="font-bold mt-2">Footwear</li>
               <li class="font-bold mt-2">Accessories</li>
               <li class="font-bold mt-2">Bags & luggage</li>
               <li><label><input type="checkbox" class="mr-2"> Jewelry</label></li>
            </ul>
          </div>

          <!-- Designers Filter -->
          <div class="bg-gray-200 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Designers</h3>
             <div class="relative mb-2">
               <input type="text" placeholder="Search for designers..." class="w-full border border-gray-300 rounded px-2 py-1 text-sm">
               <svg class="w-4 h-4 text-gray-500 absolute right-2 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-3.5-3.5M10 17a7 7 0 100-14 7 7 0 000 14z"></path></svg>
             </div>
            <ul class="space-y-1 text-sm">
              <li *ngFor="let designer of designers"><label><input type="checkbox" class="mr-2"> {{ designer }}</label></li>
            </ul>
          </div>

          <!-- Price Filter -->
          <div class="bg-gray-200 p-4 rounded-lg">
            <h3 class="font-semibold mb-2">Price</h3>
            <div class="flex space-x-2">
              <input type="text" placeholder="€ Min" class="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm">
              <input type="text" placeholder="€ Max" class="w-1/2 border border-gray-300 rounded px-2 py-1 text-sm">
            </div>
          </div>

        </aside>
        
        <!-- Lista de productos -->
        <div class="md:col-span-3">
          <div *ngIf="products.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Productos de ejemplo -->
            <div *ngFor="let product of products" class="bg-white rounded-lg shadow overflow-hidden cursor-pointer">
              <img [src]="product.imageUrl" [alt]="product.name" class="w-full h-64 object-cover">
              <div class="p-3">
                <p class="text-xs text-gray-500">{{ product.timeAgo || '' }}</p>
                <h3 class="font-semibold text-sm mb-1">{{ product.name }}</h3>
                <div class="flex items-center justify-between">
                  <p class="text-sm font-bold">€{{ product.price }} <span *ngIf="product.originalPrice" class="text-xs text-gray-500 line-through">€{{ product.originalPrice }}</span></p>
                   <svg (click)="toggleFavorite(product)" [class.text-red-500]="isFavorite(product.id)" class="w-4 h-4 text-gray-400 hover:text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
           <div *ngIf="products.length === 0" class="col-span-full text-center text-gray-500">
              No se encontraron productos.
            </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ShopComponent implements OnInit {
  selectedCategory: string | null = null;
   designers: string[] = []; // Array para almacenar los diseñadores

  // Inicialmente, la lista de productos estará vacía y se llenará con los resultados de la API
  products: any[] = []; // Cambiado a any[] para flexibilidad con la API

  constructor(private route: ActivatedRoute, private favoriteService: FavoriteService, private apiService: GrailedApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category'] || null;
      const searchTerm = params['search'] || null; // Obtener el término de búsqueda

      console.log('Categoría seleccionada:', this.selectedCategory);
      console.log('Término de búsqueda:', searchTerm);

      if (searchTerm) {
        // Si hay un término de búsqueda, buscar productos con la API
        this.apiService.search(searchTerm).subscribe(results => {
          // Suponiendo que los productos están en results.hits
           if (results && results.hits) {
             // Mapear los resultados de la API a la estructura que usamos en la plantilla
             this.products = results.hits.map((hit: any) => ({
               id: hit.id, // Asumir que hay un ID
               name: hit.name || hit.title, // Usar name o title para el nombre
               imageUrl: hit.image_url || hit.photo_url, // Asumir propiedad de imagen
               price: hit.price, // Asumir propiedad de precio
               timeAgo: hit.listed_at ? this.getTimeAgo(new Date(hit.listed_at * 1000)) : '', // Asumir timestamp y convertir
               originalPrice: hit.original_price || undefined, // Asumir precio original opcional
               size: hit.size || undefined, // Asumir propiedad de tamaño opcional
               // Añadir otras propiedades si son necesarias y vienen en la API
             }));
           } else {
             this.products = [];
           }
          console.log('API Search Results for Products:', this.products);
        });
      } else if (this.selectedCategory) {
        // Si hay una categoría seleccionada pero no término de búsqueda, podrías buscar por categoría
        // Esto requeriría soporte de la API para buscar por categoría o filtrar resultados.
        console.log('Implementar búsqueda por categoría si es necesario.');
         // Por ahora, si solo hay categoría, no cargamos productos automáticamente a menos que implementes la búsqueda por categoría
         this.products = [];

      } else {
        // Si no hay ni búsqueda ni categoría, podrías cargar productos por defecto o mostrar un mensaje
        console.log('Implementar carga de productos por defecto o mensaje.');
         this.products = [];
      }

      // Cargar diseñadores de la API (esto puede ser independiente de la búsqueda de productos si la API lo permite)
      // Mantenemos la lógica existente para cargar diseñadores para el filtro.
      this.apiService.search('', 1, 50, 'mostrecent').subscribe(results => { // Aumentamos hitsPerPage para más diseñadores
        console.log('API Search Results for Designers (initial load):', results);
         if (results && results.hits && results.hits.length > 0) {
            const extractedDesigners = results.hits
              .map((hit: any) => hit.designer || hit.brand) // Asumir propiedad 'designer' o 'brand'
              .filter((designer: any) => designer) // Filtrar resultados nulos o vacíos
              .reduce((unique: string[], item: string) => unique.includes(item) ? unique : [...unique, item], []); // Obtener nombres únicos
            this.designers = extractedDesigners;
         }
      });

    });
  }

  // Método para añadir/eliminar de favoritos
  toggleFavorite(product: any): void {
    if (this.favoriteService.isFavorite(product.id)) {
      this.favoriteService.removeFavorite(product.id);
    } else {
      // Asegúrate de que el objeto product tenga las propiedades necesarias para el servicio de favoritos
      this.favoriteService.addFavorite({
        id: product.id,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        timeAgo: product.timeAgo,
        originalPrice: product.originalPrice,
        size: product.size
      });
    }
  }

  // Método para verificar si es favorito
  isFavorite(productId: number): boolean {
    return this.favoriteService.isFavorite(productId);
  }

  // Método para añadir un diseñador a favoritos (necesita lógica en FavoriteService)
  addFavoriteDesigner(designerName: string): void {
     // TODO: Implementar lógica para añadir diseñador a favoritos en FavoriteService
     console.log('Añadir diseñador a favoritos:', designerName);
     // Podrías tener un método addFavoriteDesigner en FavoriteService
     // this.favoriteService.addFavoriteDesigner(designerName);
  }

   // Función helper para calcular "hace cuánto tiempo"
   getTimeAgo(date: Date): string {
     const now = new Date();
     const seconds = Math.round(Math.abs((now.getTime() - date.getTime()) / 1000));
     const minutes = Math.round(seconds / 60);
     const hours = Math.round(minutes / 60);
     const days = Math.round(hours / 24);
     const weeks = Math.round(days / 7);
     const months = Math.round(days / 30.4);
     const years = Math.round(days / 365);

     if (seconds < 60) return seconds + ' seconds ago';
     else if (minutes < 60) return minutes + ' minutes ago';
     else if (hours < 24) return hours + ' hours ago';
     else if (days < 7) return days + ' days ago';
     else if (weeks < 4) return weeks + ' weeks ago';
     else if (months < 12) return months + ' months ago';
     else return years + ' years ago';
   }
} 