import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasFotoComponent } from './tablas-foto.component';

describe('TablasFotoComponent', () => {
  let component: TablasFotoComponent;
  let fixture: ComponentFixture<TablasFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablasFotoComponent]
    });
    fixture = TestBed.createComponent(TablasFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
