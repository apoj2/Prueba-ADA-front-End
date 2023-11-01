import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionUsuarioComponent } from './administracion-usuario.component';

describe('AdministracionUsuarioComponent', () => {
  let component: AdministracionUsuarioComponent;
  let fixture: ComponentFixture<AdministracionUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministracionUsuarioComponent]
    });
    fixture = TestBed.createComponent(AdministracionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
