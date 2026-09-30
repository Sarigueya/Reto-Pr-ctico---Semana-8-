import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { moonOutline, sunnyOutline } from 'ionicons/icons';

import { ThemeService } from '../../services/theme.service';

/**
 * AppToolbarComponent: cabecera compartida por las tres pestañas.
 *
 * Recibe el titulo de la pantalla y muestra el boton de tema claro/oscuro.
 * La logica del tema vive en ThemeService (estado + persistencia); aqui solo
 * se consume su signal, por lo que el icono (luna/sol) reacciona solo.
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: 'app-toolbar.component.html',
  styleUrls: ['app-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonHeader, IonToolbar, IonTitle, IonButton, IonIcon],
})
export class AppToolbarComponent {
  /** Titulo de la pantalla mostrado en la cabecera. */
  @Input({ required: true }) public title = '';

  /** Servicio de tema: su signal reactiva este template. */
  public readonly theme = inject(ThemeService);

  constructor() {
    addIcons({ moonOutline, sunnyOutline });
  }
}