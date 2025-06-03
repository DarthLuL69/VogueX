import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Sobre VogueX</h1>
      
      <div class="max-w-3xl mx-auto space-y-8">
        <!-- Misión -->
        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">Nuestra Misión</h2>
          <p class="text-gray-600">
            En VogueX, nos dedicamos a revolucionar la industria de la moda promoviendo la sostenibilidad y la circularidad. 
            Nuestra plataforma conecta a compradores y vendedores de moda de segunda mano, creando un mercado vibrante 
            donde la moda sostenible es accesible para todos.
          </p>
        </section>

        <!-- Valores -->
        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">Nuestros Valores</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold mb-2">Sostenibilidad</h3>
              <p class="text-gray-600">
                Promovemos la moda circular y reducimos el impacto ambiental de la industria textil.
              </p>
            </div>
            <div>
              <h3 class="font-bold mb-2">Comunidad</h3>
              <p class="text-gray-600">
                Construimos una comunidad de amantes de la moda consciente y sostenible.
              </p>
            </div>
            <div>
              <h3 class="font-bold mb-2">Innovación</h3>
              <p class="text-gray-600">
                Utilizamos tecnología para hacer la moda sostenible más accesible y conveniente.
              </p>
            </div>
            <div>
              <h3 class="font-bold mb-2">Transparencia</h3>
              <p class="text-gray-600">
                Fomentamos la confianza y la transparencia en todas nuestras transacciones.
              </p>
            </div>
          </div>
        </section>

        <!-- Equipo -->
        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">Nuestro Equipo</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3 class="font-bold">Ana García</h3>
              <p class="text-gray-600">CEO & Fundadora</p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3 class="font-bold">Carlos Rodríguez</h3>
              <p class="text-gray-600">CTO</p>
            </div>
            <div class="text-center">
              <div class="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
              <h3 class="font-bold">Laura Martínez</h3>
              <p class="text-gray-600">Directora de Marketing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class AboutComponent {} 