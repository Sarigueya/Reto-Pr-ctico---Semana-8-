import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  /** Sustituye matchMedia para simular la preferencia de color del sistema. */
  function stubMatchMedia(matches: boolean): void {
    (
      window as unknown as {
        matchMedia: (query: string) => { matches: boolean };
      }
    ).matchMedia = () => ({ matches });
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    window.localStorage.clear();
    document.documentElement.classList.remove('app-dark');
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    window.localStorage.clear();
    document.documentElement.classList.remove('app-dark');
  });

  describe('estado inicial', () => {
    it('arranca claro cuando no hay preferencia guardada ni sistema oscuro', () => {
      stubMatchMedia(false);
      service = TestBed.inject(ThemeService);

      expect(service.isDark()).toBe(false);
      expect(document.documentElement.classList).not.toContain('app-dark');
    });

    it('sigue la preferencia del sistema la primera vez', () => {
      stubMatchMedia(true);
      service = TestBed.inject(ThemeService);

      expect(service.isDark()).toBe(true);
      expect(document.documentElement.classList).toContain('app-dark');
    });

    it('da prioridad a la preferencia guardada sobre el sistema', () => {
      window.localStorage.setItem('appPestanas-theme', 'dark');
      stubMatchMedia(false);
      service = TestBed.inject(ThemeService);

      expect(service.isDark()).toBe(true);
      expect(document.documentElement.classList).toContain('app-dark');
    });
  });

  describe('toggle()', () => {
    it('invierte el estado y aplica/retira la clase en <html>', () => {
      stubMatchMedia(false);
      service = TestBed.inject(ThemeService);
      expect(service.isDark()).toBe(false);

      service.toggle();
      expect(service.isDark()).toBe(true);
      expect(document.documentElement.classList).toContain('app-dark');

      service.toggle();
      expect(service.isDark()).toBe(false);
      expect(document.documentElement.classList).not.toContain('app-dark');
    });

    it('persiste la eleccion en localStorage', () => {
      stubMatchMedia(false);
      service = TestBed.inject(ThemeService);

      service.toggle();
      expect(window.localStorage.getItem('appPestanas-theme')).toBe('dark');

      service.toggle();
      expect(window.localStorage.getItem('appPestanas-theme')).toBe('light');
    });
  });
});