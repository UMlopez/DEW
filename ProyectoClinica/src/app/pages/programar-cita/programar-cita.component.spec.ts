import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramarCitaComponent } from './programar-cita.component';

describe('ProgramarCitaComponent', () => {
  let component: ProgramarCitaComponent;
  let fixture: ComponentFixture<ProgramarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramarCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
