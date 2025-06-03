import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Confianza y Seguridad</h1>
      
      <div class="max-w-3xl mx-auto space-y-8">
        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">Verificación de Usuarios</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              En VogueX, nos comprometemos a mantener un entorno seguro y confiable. 
              Nuestro sistema de verificación incluye:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Verificación de identidad</li>
              <li>Validación de email y teléfono</li>
              <li>Sistema de calificaciones</li>
              <li>Historial de transacciones</li>
            </ul>
          </div>
        </section>

        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">Protección de Compras</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              Garantizamos la seguridad de tus compras mediante:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Pagos seguros y encriptados</li>
              <li>Protección contra fraudes</li>
              <li>Política de devoluciones</li>
              <li>Resolución de disputas</li>
            </ul>
          </div>
        </section>

        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">Calidad de Productos</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              Nos aseguramos de que todos los productos cumplan con nuestros estándares:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Verificación de autenticidad</li>
              <li>Inspección de calidad</li>
              <li>Descripciones precisas</li>
              <li>Fotos reales del producto</li>
            </ul>
          </div>
        </section>

        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">Soporte y Ayuda</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              Nuestro equipo está disponible para ayudarte:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Atención al cliente 24/7</li>
              <li>Resolución rápida de problemas</li>
              <li>Guías y tutoriales</li>
              <li>FAQ actualizado</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class TrustComponent {} 