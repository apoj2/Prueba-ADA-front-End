import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionRolusuarioComponent } from './administracion-rolusuario.component';

describe('AdministracionRolusuarioComponent', () => {
  let component: AdministracionRolusuarioComponent;
  let fixture: ComponentFixture<AdministracionRolusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministracionRolusuarioComponent]
    });
    fixture = TestBed.createComponent(AdministracionRolusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
