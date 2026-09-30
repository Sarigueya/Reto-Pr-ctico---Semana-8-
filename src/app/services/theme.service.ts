import { Injectable, signal } from '@angular/core';

/**
 * ThemeService: gestiona el tema claro/oscuro de la aplicacion.
 *
 * El tema por defecto es claro y NO sigue automaticamente al sistema.
 * La primera vez que se abre la app se respeta la preferencia del SO
 * (prefers-color-scheme); a partir de la primera eleccion manual, el valor
 * guardado en localStorage tiene prioridad.
 *
 * El estado se expone como signal de solo lectura: los templates que lo
 * lean (p. ej. el icono del boton de la cabecera) se actualizan solos,
 * incluso con el cambio de deteccion de Angular (zoneless).
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  /** Clave usada en localStorage para recordar la eleccion del usuario. */
  private static readonly STORAGE_KEY = 'appPestanas-theme';

  /** Clase que activa la paleta oscura sobre <html>. */
  private static readonly DARK_CLASS = 'app-dark';

  private readonly darkSignal = signal<boolean>(false);

  /** Valor actual del tema (lectura reactiva). */
  public readonly isDark = this.darkSignal.asReadonly();

  constructor() {
    const stored = this.readStoredPreference();
    this.darkSignal.set(stored ?? this.systemPrefersDark());
    this.apply();
  }

  /**
   * Alterna el tema entre claro y oscuro, guarda la eleccion y la aplica
   * al DOM.
   */
  public toggle(): void {
    this.darkSignal.update((value) => !value);
    this.persistPreference();
    this.apply();
  }

  /** Aplica el estado del tema sobre <html> y el <meta> del documento. */
  private apply(): void {
    document.documentElement.classList.toggle(
      ThemeService.DARK_CLASS,
      this.darkSignal(),
    );

    // Los controles nativos del navegador siguen al tema elegido.
    const meta = document.querySelector('meta[name="color-scheme"]');
    meta?.setAttribute('content', this.darkSignal() ? 'dark' : 'light');
  }

  /**
   * Lee la preferencia guardada. Devuelve null si no hay valor o si el
   * almacenamiento no esta disponible (modo privado, jsdom, etc.).
   */
  private readStoredPreference(): boolean | null {
    try {
      const value = window.localStorage.getItem(ThemeService.STORAGE_KEY);
      return value === 'dark' ? true : value === 'light' ? false : null;
    } catch {
      return null;
    }
  }

  /** Guarda la eleccion en localStorage. Nunca lanza. */
  private persistPreference(): void {
    try {
      window.localStorage.setItem(
        ThemeService.STORAGE_KEY,
        this.darkSignal() ? 'dark' : 'light',
      );
    } catch {
      /* Si el almacenamiento falla, el tema igual se aplica en memoria. */
    }
  }

  /** Preferencia del sistema, con fallback seguro si matchMedia no existe. */
  private systemPrefersDark(): boolean {
    try {
      return (
        window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false
      );
    } catch {
      return false;
    }
  }
}