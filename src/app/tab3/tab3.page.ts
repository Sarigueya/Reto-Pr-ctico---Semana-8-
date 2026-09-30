import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonAvatar,
  IonChip,
  IonList,
  IonItem,
  IonLabel,
  IonNote,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  callOutline,
  locationOutline,
  syncOutline,
  checkmarkCircle,
  pauseCircle,
} from 'ionicons/icons';
import { AppToolbarComponent } from '../shared/app-toolbar/app-toolbar.component';

/**
 * Dato de contacto de la tarjeta de presentación.
 */
export interface Contacto {
  icono: string;
  etiqueta: string;
  valor: string;
  color: string;
}

/**
 * Tab3Page: perfil dinamico.
 *
 * isAvailable es la variable booleana que alterna el estado entre
 * "Disponible" y "Ocupado". El cambio de color se resuelve con
 * [ngClass] + clases CSS, de modo que la vista reacciona al estado.
 */
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    CommonModule,
    AppToolbarComponent,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonAvatar,
    IonChip,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
  ],
})
export class Tab3Page {
  /** Nombre completo mostrado en la tarjeta. */
  public fullName: string = 'Sara Isabella Andrade';

  /** Rol o puesto. */
  public roleTitle: string = 'Estudiante de Ingeniería de Software';

  /** Avatar del perfil: imagen de hámster de Wikimedia Commons. */
  public avatarImageUrl: string =
    'https://commons.wikimedia.org/w/thumb.php?f=Golden_hamster_front_1.jpg&w=400';

  /** Datos de contacto, renderizados con *ngFor. */
  public contacts: Contacto[] = [
    {
      icono: 'mail-outline',
      etiqueta: 'Correo Institucional',
      valor: 'u20242229107@usco.edu.co',
      color: 'primary',
    },
    {
      icono: 'call-outline',
      etiqueta: 'Teléfono',
      valor: '+52 55 1234 5678',
      color: 'secondary',
    },
    {
      icono: 'location-outline',
      etiqueta: 'Ubicación',
      valor: 'Campus Central / Remoto',
      color: 'tertiary',
    },
  ];

  /**
   * Estado de disponibilidad. true = "Disponible", false = "Ocupado".
   */
  public isAvailable: boolean = true;

  constructor() {
    addIcons({
      mailOutline,
      callOutline,
      locationOutline,
      syncOutline,
      checkmarkCircle,
      pauseCircle,
    });
  }

  /**
   * Invierte el estado de disponibilidad del perfil.
   */
  public toggleAvailability(): void {
    this.isAvailable = !this.isAvailable;
  }
}
