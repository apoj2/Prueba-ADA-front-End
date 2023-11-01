import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionLayoutComponent } from './administracion-layout.component';

describe('AdministracionLayoutComponent', () => {
  let component: AdministracionLayoutComponent;
  let fixture: ComponentFixture<AdministracionLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministracionLayoutComponent]
    });
    fixture = TestBed.createComponent(AdministracionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
