import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasRolusuarioComponent } from './tablas-rolusuario.component';

describe('TablasRolusuarioComponent', () => {
  let component: TablasRolusuarioComponent;
  let fixture: ComponentFixture<TablasRolusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablasRolusuarioComponent]
    });
    fixture = TestBed.createComponent(TablasRolusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
