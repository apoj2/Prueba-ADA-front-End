import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaWebProductosHomeComponent } from './pagina-web-productos-home.component';

describe('PaginaWebProductosHomeComponent', () => {
  let component: PaginaWebProductosHomeComponent;
  let fixture: ComponentFixture<PaginaWebProductosHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaWebProductosHomeComponent]
    });
    fixture = TestBed.createComponent(PaginaWebProductosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
