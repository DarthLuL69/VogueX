import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  categories = [
    { name: 'Designers', link: '/designers' },
    { name: 'Menswear', link: '/menswear' },
    { name: 'Womenswear', link: '/womenswear' },
    { name: 'Accessories', link: '/accessories' },
    { name: 'Sneakers', link: '/sneakers' },
    { name: 'Staff Picks', link: '/staff-picks' }
  ];
  
  mobileMenuOpen = false;
  
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
