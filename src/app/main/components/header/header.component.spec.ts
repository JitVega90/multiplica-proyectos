import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent], // Si es standalone
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Renderiza el template antes de ejecutar la prueba
  });

  it('Debe mostrar el título correctamente', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const divElement = compiled.querySelector('div'); // Asegura que el div existe

    expect(divElement).not.toBeNull(); // Verifica que el div está presente

    const titleElement = divElement?.querySelector('h1'); // Ahora busca dentro del div

    expect(titleElement).not.toBeNull(); // Verifica que el h1 existe
    expect(titleElement?.textContent?.trim()).toBe('Multiplica Proyectos'); // Compara el texto sin espacios extra
  });
});
