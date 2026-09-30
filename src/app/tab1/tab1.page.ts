import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { bookOutline, schoolOutline, sparklesOutline } from 'ionicons/icons';
import { AppToolbarComponent } from '../shared/app-toolbar/app-toolbar.component';

/**
 * Elemento de la lista de contenidos de la pantalla de bienvenida.
 */
export interface TemaPractica {
  icono: string;
  titulo: string;
  descripcion: string;
  color: string;
}

/**
 * Tab1Page: pantalla de bienvenida.
 *
 * Las propiedades declaradas aquí se vinculan a la vista mediante
 * interpolación ({{ }}) y las directivas estructurales de Angular
 * (*ngFor) declaradas en CommonModule.
 */
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    CommonModule,
    AppToolbarComponent,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  ],
})
export class Tab1Page {
  /** Nombre completo del estudiante. */
  public fullName: string = 'Sara Isabella Andrade';

  /** Carrera universitaria. */
  public academicDegree: string = 'Ingeniería de Software';

  /** Texto introductorio de la tarjeta. */
  public welcomeMessage: string =
    'Bienvenido a tu aplicación Ionic. Esta tarjeta demuestra cómo enlazar propiedades de TypeScript con la vista.';

  /** Contenido de la práctica, renderizado con *ngFor. */
  public topics: TemaPractica[] = [
    {
      icono: 'book-outline',
      titulo: 'Unidad 3: Desarrollo Multiplataforma',
      descripcion: 'Prácticas con Ionic Framework y Angular.',
      color: 'primary',
    },
    {
      icono: 'school-outline',
      titulo: 'Navegación por pestañas',
      descripcion: 'Tres pantallas independientes con ion-tabs.',
      color: 'tertiary',
    },
    {
      icono: 'sparkles-outline',
      titulo: 'Interpolación en la vista',
      descripcion: 'Las variables del archivo .ts se muestran en el HTML.',
      color: 'success',
    },
  ];

  constructor() {
    addIcons({ bookOutline, schoolOutline, sparklesOutline });
  }
}
