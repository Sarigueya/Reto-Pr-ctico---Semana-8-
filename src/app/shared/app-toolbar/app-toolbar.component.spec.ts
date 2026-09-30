import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToolbarComponent } from './app-toolbar.component';
import { ThemeService } from '../../services/theme.service';

describe('AppToolbarComponent', () => {
  let fixture: ComponentFixture<AppToolbarComponent>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    window.localStorage.clear();
    document.documentElement.classList.remove('app-dark');

    await TestBed.configureTestingModule({
      imports: [AppToolbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppToolbarComponent);
    fixture.componentRef.setInput('title', 'Tab 1: Inicio');
    fixture.detectChanges();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    window.localStorage.clear();
    document.documentElement.classList.remove('app-dark');
  });

  function botonTema(): HTMLElement {
    return fixture.nativeElement.querySelector('ion-button');
  }

  function iconoTema(): HTMLElement & { name: string } {
    return fixture.nativeElement.querySelector('ion-icon');
  }

  it('renders the given title', () => {
    const titulo = fixture.nativeElement.querySelector('ion-title');
    expect(titulo.textContent).toContain('Tab 1: Inicio');
  });

  it('updates the title reactively', () => {
    fixture.componentRef.setInput('title', 'Tab 2: Contador');
    fixture.detectChanges();

    const titulo = fixture.nativeElement.querySelector('ion-title');
    expect(titulo.textContent).toContain('Tab 2: Contador');
  });

  it('toggles the theme with a real click and updates the icon', () => {
    const theme = TestBed.inject(ThemeService);

    expect(theme.isDark()).toBe(false);
    expect(iconoTema().name).toBe('moon-outline');

    botonTema().click();
    fixture.detectChanges();

    expect(theme.isDark()).toBe(true);
    expect(document.documentElement.classList).toContain('app-dark');
    expect(iconoTema().name).toBe('sunny-outline');
  });
});