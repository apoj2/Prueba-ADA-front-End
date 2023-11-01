import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasUsuarioComponent } from './tablas-usuario.component';

describe('TablasUsuarioComponent', () => {
  let component: TablasUsuarioComponent;
  let fixture: ComponentFixture<TablasUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablasUsuarioComponent]
    });
    fixture = TestBed.createComponent(TablasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
