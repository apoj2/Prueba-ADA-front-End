import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFotoComponent } from './formulario-foto.component';

describe('FormularioFotoComponent', () => {
  let component: FormularioFotoComponent;
  let fixture: ComponentFixture<FormularioFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioFotoComponent]
    });
    fixture = TestBed.createComponent(FormularioFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
