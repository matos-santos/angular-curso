import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioNewComponent } from './funcionario-new.component';

describe('FuncionarioNewComponent', () => {
  let component: FuncionarioNewComponent;
  let fixture: ComponentFixture<FuncionarioNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncionarioNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
