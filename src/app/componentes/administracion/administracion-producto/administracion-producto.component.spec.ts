import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionProductoComponent } from './administracion-producto.component';

describe('AdministracionProductoComponent', () => {
  let component: AdministracionProductoComponent;
  let fixture: ComponentFixture<AdministracionProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministracionProductoComponent]
    });
    fixture = TestBed.createComponent(AdministracionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
