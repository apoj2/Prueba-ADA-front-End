import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaWebProductosLayoutComponent } from './pagina-web-productos-layout.component';

describe('PaginaWebProductosLayoutComponent', () => {
  let component: PaginaWebProductosLayoutComponent;
  let fixture: ComponentFixture<PaginaWebProductosLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaWebProductosLayoutComponent]
    });
    fixture = TestBed.createComponent(PaginaWebProductosLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
