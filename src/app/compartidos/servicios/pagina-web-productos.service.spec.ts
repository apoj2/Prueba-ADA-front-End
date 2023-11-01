import { TestBed } from '@angular/core/testing';

import { PaginaWebProductosService } from './pagina-web-productos.service';

describe('PaginaWebProductosService', () => {
  let service: PaginaWebProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginaWebProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
