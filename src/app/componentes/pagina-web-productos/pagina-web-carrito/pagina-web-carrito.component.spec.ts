import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaWebCarritoComponent } from './pagina-web-carrito.component';

describe('PaginaWebCarritoComponent', () => {
  let component: PaginaWebCarritoComponent;
  let fixture: ComponentFixture<PaginaWebCarritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaWebCarritoComponent]
    });
    fixture = TestBed.createComponent(PaginaWebCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
