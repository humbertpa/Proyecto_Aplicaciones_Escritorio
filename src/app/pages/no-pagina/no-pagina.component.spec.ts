import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPaginaComponent } from './no-pagina.component';

describe('NoPaginaComponent', () => {
  let component: NoPaginaComponent;
  let fixture: ComponentFixture<NoPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
