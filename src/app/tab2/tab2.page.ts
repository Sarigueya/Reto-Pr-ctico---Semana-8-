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
  IonBadge,
  IonNote,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addOutline, removeOutline, refreshOutline } from 'ionicons/icons';
import { AppToolbarComponent } from '../shared/app-toolbar/app-toolbar.component';

/**
 * Tab2Page: contador interactivo.
 *
 * La vista invoca increase() y decrease() mediante (click).
 * decrease() incluye la guarda que impide que el valor baje de cero;
 * el [disabled] del boton es solo la red de seguridad visual.
 */
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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
    IonBadge,
    IonNote,
  ],
})
export class Tab2Page {
  /** Valor actual del contador. Nunca puede ser negativo. */
  public counterValue: number = 0;

  constructor() {
    addIcons({ addOutline, removeOutline, refreshOutline });
  }

  /**
   * Incrementa el contador en una unidad.
   */
  public increase(): void {
    this.counterValue++;
  }

  /**
   * Disminuye el contador en una unidad, sin dejar que descienda
   * por debajo de cero.
   */
  public decrease(): void {
    if (this.counterValue > 0) {
      this.counterValue--;
    }
  }

  /**
   * Devuelve el contador a su valor inicial.
   */
  public reset(): void {
    this.counterValue = 0;
  }
}
