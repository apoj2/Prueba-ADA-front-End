import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasProductoComponent } from './tablas-producto.component';

describe('TablasProductoComponent', () => {
  let component: TablasProductoComponent;
  let fixture: ComponentFixture<TablasProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablasProductoComponent]
    });
    fixture = TestBed.createComponent(TablasProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
