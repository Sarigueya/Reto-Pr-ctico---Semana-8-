import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonNote,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, calculatorOutline, personOutline } from 'ionicons/icons';
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
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonNote,
  ],
})
export class Tab1Page {
  /** Nombre completo del estudiante. */
  public fullName: string = 'Sara Isabella Andrade';

  /** Carrera universitaria. */
  public academicDegree: string = 'Ingeniería de Software';

  /** Mensaje de presentación de la app (descriptivo, sin saludo externo). */
  public welcomeMessage: string =
    'Esta app está construida con Ionic y Angular como práctica de la carrera de Ingeniería de Software. Está organizada en tres pestañas y cada una demuestra un concepto distinto trabajado en clase.';

  /** Contenido de cada pestaña, renderizado con *ngFor. */
  public topics: TemaPractica[] = [
    {
      icono: 'home-outline',
      titulo: 'Pestaña 1 · Inicio',
      descripcion:
        'La presentación de la app: datos del archivo .ts enlazados con la vista.',
      color: 'primary',
    },
    {
      icono: 'calculator-outline',
      titulo: 'Pestaña 2 · Contador',
      descripcion:
        'Un contador interactivo que aumenta y disminuye sin bajar de cero.',
      color: 'tertiary',
    },
    {
      icono: 'person-outline',
      titulo: 'Pestaña 3 · Perfil',
      descripcion:
        'Tarjeta de presentación con avatar, estado Disponible/Ocupado y contacto.',
      color: 'success',
    },
  ];

  constructor() {
    addIcons({ homeOutline, calculatorOutline, personOutline });
  }
}
