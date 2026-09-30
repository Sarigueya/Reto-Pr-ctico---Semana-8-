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
    const subtitle = fixture.nativeElement.querySelector('ion-card-subtitle');

    expect(title.textContent).toContain('Sara Isabella Andrade');
    expect(subtitle.textContent).toContain('Ingeniería de Software');
  });

  it('renders one item per topic with *ngFor', () => {
    const items = fixture.nativeElement.querySelectorAll('.temas-list ion-item');
    expect(items.length).toBe(component.topics.length);
  });
});
