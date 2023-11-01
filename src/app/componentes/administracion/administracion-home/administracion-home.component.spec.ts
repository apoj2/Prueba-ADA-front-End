import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionHomeComponent } from './administracion-home.component';

describe('AdministracionHomeComponent', () => {
  let component: AdministracionHomeComponent;
  let fixture: ComponentFixture<AdministracionHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministracionHomeComponent]
    });
    fixture = TestBed.createComponent(AdministracionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
