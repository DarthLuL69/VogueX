import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  id: number;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.component.html'
})
export class HeroCarouselComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    { 
      id: 1, 
      image: 'https://placehold.co/1200x400/000000/FFFFFF?text=Slide+1',
      alt: 'Fashion slide 1'
    },
    { 
      id: 2, 
      image: 'https://placehold.co/1200x400/000000/FFFFFF?text=Slide+2',
      alt: 'Fashion slide 2'
    },
    { 
      id: 3, 
      image: 'https://placehold.co/1200x400/000000/FFFFFF?text=Slide+3',
      alt: 'Fashion slide 3'
    },
    { 
      id: 4, 
      image: 'https://placehold.co/1200x400/000000/FFFFFF?text=Slide+4',
      alt: 'Fashion slide 4'
    },
    { 
      id: 5, 
      image: 'https://placehold.co/1200x400/000000/FFFFFF?text=Slide+5',
      alt: 'Fashion slide 5'
    },
    { 
      id: 6, 
      image: 'https://placehold.co/1200x400/000000/FFFFFF?text=Slide+6',
      alt: 'Fashion slide 6'
    }
  ];
  
  currentSlide = 0;
  private autoplayInterval: ReturnType<typeof setInterval> | undefined;
  
  constructor(private cdr: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    this.startAutoplay();
  }
  
  ngOnDestroy(): void {
    this.stopAutoplay();
  }
  
  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
      this.cdr.detectChanges();
    }, 5000); // Change slide every 5 seconds
  }
  
  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }
  
  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetAutoplay();
  }
  
  previousSlide(): void {
    this.currentSlide = (this.currentSlide === 0) ? this.slides.length - 1 : this.currentSlide - 1;
    this.resetAutoplay();
  }
  
  nextSlide(): void {
    this.currentSlide = (this.currentSlide === this.slides.length - 1) ? 0 : this.currentSlide + 1;
    this.resetAutoplay();
  }
  
  resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
