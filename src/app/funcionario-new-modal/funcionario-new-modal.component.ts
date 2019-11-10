import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { Funcionarios, FuncionarioService } from '../funcionario.service';

declare const $;

@Component({
  selector: 'funcionario-new-modal',
  templateUrl: './funcionario-new-modal.component.html',
  styleUrls: ['./funcionario-new-modal.component.css']
})
export class FuncionarioNewModalComponent implements OnInit {
  funcionario: Funcionarios = {
    name: '',
    salario: 0,
    bonus: 0,
  };

  constructor(private funcionarioService: FuncionarioService, private element: ElementRef) { }

  @Output()
  onsubmit: EventEmitter<Funcionarios> = new EventEmitter<Funcionarios>();

  ngOnInit() {
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
  }

  show() {
    const modalDiv = this.getDivModal();
    $(modalDiv).modal('show');
  }

  hide() {
    const modalDiv = this.getDivModal();
    $(modalDiv).modal('hide');
  }

  addFuncionario() {
    const copy = Object.assign({}, this.funcionario);
    this.funcionarioService.addFuncionario(copy);
    this.funcionario = {
      name: '',
      salario: 0,
      bonus: 0
    };
    this.onsubmit.emit(copy);
    this.hide();
  }
}
