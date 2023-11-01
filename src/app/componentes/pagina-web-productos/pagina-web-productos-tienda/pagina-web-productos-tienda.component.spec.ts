import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaWebProductosTiendaComponent } from './pagina-web-productos-tienda.component';

describe('PaginaWebProductosTiendaComponent', () => {
  let component: PaginaWebProductosTiendaComponent;
  let fixture: ComponentFixture<PaginaWebProductosTiendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaWebProductosTiendaComponent]
    });
    fixture = TestBed.createComponent(PaginaWebProductosTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
