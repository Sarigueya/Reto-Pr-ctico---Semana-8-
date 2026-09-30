import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exposes the full name and the academic degree', () => {
    expect(component.fullName).toBe('Sara Isabella Andrade');
    expect(component.academicDegree).toBe('Ingeniería de Software');
  });

  it('interpolates the properties in the card', () => {
    const title = fixture.nativeElement.querySelector('ion-card-title');
    const autor = fixture.nativeElement.querySelector('.presentado-por');

    expect(title.textContent).toContain('Bienvenido(a)');
    expect(title.textContent).not.toContain('Sara Isabella Andrade');
    expect(autor.textContent).toContain('Presentado por');
    expect(autor.textContent).toContain('Sara Isabella Andrade');
    expect(autor.textContent).toContain('Ingeniería de Software');
  });

  it('renders one item per topic with *ngFor', () => {
    const items = fixture.nativeElement.querySelectorAll('.temas-list ion-item');
    expect(items.length).toBe(component.topics.length);
  });

  it('expone un mensaje de presentación de la app', () => {
    expect(component.welcomeMessage).toContain('Ionic');
    expect(component.welcomeMessage).toContain('Angular');
    expect(component.welcomeMessage).toContain('Ingeniería de Software');
  });

  it('el footer resume la práctica', () => {
    const firma = fixture.nativeElement.querySelector('.firma');
    expect(firma.textContent).toContain('Práctica');
    expect(firma.textContent).toContain('Desarrollo Multiplataforma');
  });

  it('la guía describe el contenido de cada pestaña', () => {
    const titulos = component.topics.map((t) => t.titulo).join(' | ');
    expect(titulos).toContain('Inicio');
    expect(titulos).toContain('Contador');
    expect(titulos).toContain('Perfil');
    expect(titulos).not.toContain('Unidad 3');
  });
});
