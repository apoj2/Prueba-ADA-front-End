import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRolusuarioComponent } from './formulario-rolusuario.component';

describe('FormularioRolusuarioComponent', () => {
  let component: FormularioRolusuarioComponent;
  let fixture: ComponentFixture<FormularioRolusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioRolusuarioComponent]
    });
    fixture = TestBed.createComponent(FormularioRolusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
