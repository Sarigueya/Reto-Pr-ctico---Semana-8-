import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3Page } from './tab3.page';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function chip(): HTMLElement {
    return fixture.nativeElement.querySelector('ion-chip');
  }

  function botonEstado(): HTMLElement {
    return fixture.nativeElement.querySelector('.toggle-wrapper ion-button');
  }

  /**
   * Simula un click real. El click del DOM es lo que marca la vista como
   * dirty en Angular zoneless; mutar la propiedad a mano no alcanza.
   */
  function alternar(): void {
    botonEstado().click();
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('starts as "Disponible"', () => {
    expect(component.isAvailable).toBe(true);
  });

  it('toggleAvailability() flips the state to "Ocupado"', () => {
    component.toggleAvailability();
    expect(component.isAvailable).toBe(false);
  });

  it('toggleAvailability() flips the state back to "Disponible"', () => {
    component.toggleAvailability();
    component.toggleAvailability();
    expect(component.isAvailable).toBe(true);
  });

  it('renders the availability state in the view', () => {
    expect(chip().textContent).toContain('Disponible');

    alternar();
    expect(chip().textContent).toContain('Ocupado');

    alternar();
    expect(chip().textContent).toContain('Disponible');
  });

  it('switches the reactive colour class with the state', () => {
    expect(chip().classList).toContain('estado-disponible');

    alternar();
    expect(chip().classList).toContain('estado-ocupado');
    expect(chip().classList).not.toContain('estado-disponible');

    alternar();
    expect(chip().classList).toContain('estado-disponible');
    expect(chip().classList).not.toContain('estado-ocupado');
  });

  it('renders the status icon for each state', () => {
    // ion-icon recibe `name` como propiedad, no como atributo reflejado.
    const icono = chip().querySelector('ion-icon') as HTMLElement & { name: string };
    expect(icono.name).toBe('checkmark-circle');

    alternar();
    expect(icono.name).toBe('pause-circle');
  });

  it('swaps the description with *ngSwitch', () => {
    const descripcion = fixture.nativeElement.querySelector('.estado-descripcion');
    expect(descripcion.textContent).toContain('Disponible para recibir proyectos');

    alternar();
    expect(descripcion.textContent).toContain('Ocupado actualmente');
  });

  it('swaps the button label with *ngIf / ng-template', () => {
    expect(botonEstado().textContent).toContain('Marcar como Ocupado');

    alternar();
    expect(botonEstado().textContent).toContain('Marcar como Disponible');
  });

  it('renders one contact item per entry with *ngFor', () => {
    const items = fixture.nativeElement.querySelectorAll('.contactos-list ion-item');
    expect(items.length).toBe(component.contacts.length);
    expect(items[0].textContent).toContain('Correo Institucional');
  });

  it('renders the avatar image', () => {
    const img = fixture.nativeElement.querySelector('.perfil-avatar img');
    expect(img.getAttribute('src')).toBe(component.avatarImageUrl);
  });
});
