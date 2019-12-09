import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteWindowComponent } from './cliente-window.component';

describe('ClienteWindowComponent', () => {
  let component: ClienteWindowComponent;
  let fixture: ComponentFixture<ClienteWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
