import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionFotoComponent } from './administracion-foto.component';

describe('AdministracionFotoComponent', () => {
  let component: AdministracionFotoComponent;
  let fixture: ComponentFixture<AdministracionFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministracionFotoComponent]
    });
    fixture = TestBed.createComponent(AdministracionFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
