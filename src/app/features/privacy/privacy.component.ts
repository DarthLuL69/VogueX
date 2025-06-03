import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Política de Privacidad</h1>
      
      <div class="max-w-3xl mx-auto space-y-8">
        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              Recopilamos la siguiente información:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Información de registro (nombre, email, contraseña)</li>
              <li>Información de perfil (foto, biografía)</li>
              <li>Información de transacciones</li>
              <li>Datos de uso y navegación</li>
            </ul>
          </div>
        </section>

        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">2. Uso de la Información</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              Utilizamos tu información para:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Proporcionar y mantener nuestros servicios</li>
              <li>Procesar transacciones</li>
              <li>Enviar notificaciones importantes</li>
              <li>Mejorar nuestros servicios</li>
            </ul>
          </div>
        </section>

        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">3. Protección de Datos</h2>
          <p class="text-gray-600 mb-4">
            Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales 
            contra el acceso no autorizado, la pérdida o la alteración.
          </p>
        </section>

        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">4. Tus Derechos</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              Tienes derecho a:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar información incorrecta</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tus datos</li>
            </ul>
          </div>
        </section>

        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">5. Contacto</h2>
          <p class="text-gray-600">
            Si tienes preguntas sobre nuestra política de privacidad, puedes contactarnos en:
            <br>
            Email: privacy&#64;voguex.com
          </p>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class PrivacyComponent {} 