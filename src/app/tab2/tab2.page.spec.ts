import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  /** Botones en el orden del template: 0 = Aumentar, 1 = Disminuir, 2 = Poner en Cero. */
  let botones: NodeListOf<HTMLElement>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
    botones = fixture.nativeElement.querySelectorAll('.botones-accion ion-button');
  });

  /**
   * Simula un click real. El click del DOM es lo que marca la vista como
   * dirty en Angular zoneless; mutar la propiedad a mano no alcanza.
   */
  function click(indice: number): void {
    botones[indice].click();
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('starts at zero', () => {
    expect(component.counterValue).toBe(0);
  });

  it('increase() adds one to the counter', () => {
    component.increase();
    component.increase();
    expect(component.counterValue).toBe(2);
  });

  it('decrease() subtracts one from the counter', () => {
    component.increase();
    component.increase();
    component.decrease();
    expect(component.counterValue).toBe(1);
  });

  it('decrease() never goes below zero', () => {
    component.increase();
    component.decrease();
    component.decrease();
    component.decrease();
    expect(component.counterValue).toBe(0);
  });

  it('reset() returns the counter to zero', () => {
    component.increase();
    component.reset();
    expect(component.counterValue).toBe(0);
  });

  it('the counter value is rendered in the view', () => {
    const valor = fixture.nativeElement.querySelector('.valor-texto');
    expect(valor.textContent.trim()).toBe('0');

    click(0);
    click(0);
    expect(valor.textContent.trim()).toBe('2');

    click(1);
    expect(valor.textContent.trim()).toBe('1');
  });

  it('the "Aumentar" button increments through the view', () => {
    click(0);
    click(0);
    click(0);
    expect(component.counterValue).toBe(3);
  });

  it('the "Disminuir" button never drops the view below zero', () => {
    click(0);
    for (let i = 0; i < 5; i++) {
      click(1);
    }
    expect(component.counterValue).toBe(0);
  });

  it('disables the "Disminuir" button only when the counter reaches zero', () => {
    // ion-button expone `disabled` como propiedad; el atributo reflejado por
    // Stencil no se retira en jsdom, asi que se verifica la propiedad.
    const disminuir = botones[1] as HTMLElement & { disabled: boolean };

    // El contador arranca en 0, por lo que el boton ya viene deshabilitado.
    expect(disminuir.disabled).toBe(true);

    click(0);
    expect(component.counterValue).toBe(1);
    expect(disminuir.disabled).toBe(false);

    click(1);
    expect(component.counterValue).toBe(0);
    expect(disminuir.disabled).toBe(true);
  });
});
