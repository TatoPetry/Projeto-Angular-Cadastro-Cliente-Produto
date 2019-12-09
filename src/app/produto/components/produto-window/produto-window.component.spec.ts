import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoWindowComponent } from './produto-window.component';

describe('ProdutoWindowComponent', () => {
  let component: ProdutoWindowComponent;
  let fixture: ComponentFixture<ProdutoWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
