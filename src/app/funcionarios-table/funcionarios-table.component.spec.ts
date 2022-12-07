import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosTableComponent } from './funcionarios-table.component';

describe('FuncionariosTableComponent', () => {
  let component: FuncionariosTableComponent;
  let fixture: ComponentFixture<FuncionariosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionariosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
