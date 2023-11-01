import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaWebProductosEncabezadoComponent } from './pagina-web-productos-encabezado.component';

describe('PaginaWebProductosEncabezadoComponent', () => {
  let component: PaginaWebProductosEncabezadoComponent;
  let fixture: ComponentFixture<PaginaWebProductosEncabezadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaWebProductosEncabezadoComponent]
    });
    fixture = TestBed.createComponent(PaginaWebProductosEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
