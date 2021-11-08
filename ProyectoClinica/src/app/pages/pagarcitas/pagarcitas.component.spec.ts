import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarcitasComponent } from './pagarcitas.component';

describe('PagarcitasComponent', () => {
  let component: PagarcitasComponent;
  let fixture: ComponentFixture<PagarcitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagarcitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarcitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
