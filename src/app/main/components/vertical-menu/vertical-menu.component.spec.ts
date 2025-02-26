import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { VerticalMenuComponent } from './vertical-menu.component';

describe('VerticalMenuComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [VerticalMenuComponent], // Si es standalone
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }), // Simulación de parámetros de ruta
            snapshot: { paramMap: { get: (key: string) => '123' } }
          }
        }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(VerticalMenuComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
