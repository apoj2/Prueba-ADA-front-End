import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionEncabezadoComponent } from './administracion-encabezado.component';

describe('AdministracionEncabezadoComponent', () => {
  let component: AdministracionEncabezadoComponent;
  let fixture: ComponentFixture<AdministracionEncabezadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministracionEncabezadoComponent]
    });
    fixture = TestBed.createComponent(AdministracionEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
