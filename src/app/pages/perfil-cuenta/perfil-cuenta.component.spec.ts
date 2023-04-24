import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCuentaComponent } from './perfil-cuenta.component';

describe('PerfilCuentaComponent', () => {
  let component: PerfilCuentaComponent;
  let fixture: ComponentFixture<PerfilCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCuentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
