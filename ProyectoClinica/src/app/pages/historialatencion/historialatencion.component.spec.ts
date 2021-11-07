import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialatencionComponent } from './historialatencion.component';

describe('HistorialatencionComponent', () => {
  let component: HistorialatencionComponent;
  let fixture: ComponentFixture<HistorialatencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialatencionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialatencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
