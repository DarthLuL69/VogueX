import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Términos y Condiciones</h1>
      
      <div class="max-w-3xl mx-auto space-y-8">
        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">1. Aceptación de los Términos</h2>
          <p class="text-gray-600 mb-4">
            Al acceder y utilizar VogueX, aceptas estar sujeto a estos términos y condiciones. 
            Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder a la plataforma.
          </p>
        </section>

        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">2. Uso de la Plataforma</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              VogueX es una plataforma que permite a los usuarios comprar y vender artículos de moda de segunda mano. 
              Al utilizar nuestra plataforma, aceptas:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Proporcionar información precisa y veraz</li>
              <li>No infringir derechos de propiedad intelectual</li>
              <li>No realizar actividades fraudulentas</li>
              <li>Respetar a otros usuarios</li>
            </ul>
          </div>
        </section>

        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">3. Responsabilidades del Usuario</h2>
          <div class="space-y-4">
            <p class="text-gray-600">
              Como usuario de VogueX, eres responsable de:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2">
              <li>Mantener la seguridad de tu cuenta</li>
              <li>Verificar la autenticidad de los productos</li>
              <li>Cumplir con las políticas de devolución</li>
              <li>Respetar los derechos de otros usuarios</li>
            </ul>
          </div>
        </section>

        <section class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">4. Modificaciones</h2>
          <p class="text-gray-600">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. 
            Las modificaciones entrarán en vigor inmediatamente después de su publicación en la plataforma.
          </p>
        </section>
      </div>
    </div>
  `,
  styles: []
})
export class TermsComponent {} 