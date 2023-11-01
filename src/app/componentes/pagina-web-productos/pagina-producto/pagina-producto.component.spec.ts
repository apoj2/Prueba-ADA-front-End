import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProductoComponent } from './pagina-producto.component';

describe('PaginaProductoComponent', () => {
  let component: PaginaProductoComponent;
  let fixture: ComponentFixture<PaginaProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaProductoComponent]
    });
    fixture = TestBed.createComponent(PaginaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
