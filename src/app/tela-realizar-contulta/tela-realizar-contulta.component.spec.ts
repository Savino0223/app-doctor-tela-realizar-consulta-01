import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaRealizarContultaComponent } from './tela-realizar-contulta.component';

describe('TelaRealizarContultaComponent', () => {
  let component: TelaRealizarContultaComponent;
  let fixture: ComponentFixture<TelaRealizarContultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaRealizarContultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaRealizarContultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
