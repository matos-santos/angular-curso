import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Funcionarios } from '../../funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ModalClass } from 'src/app/shared/modal/modalClass';

declare const $;
@Component({
  selector: 'funcionario-new-modal',
  templateUrl: './funcionario-new-modal.component.html',
  styleUrls: ['./funcionario-new-modal.component.css']
})
export class FuncionarioNewModalComponent extends ModalClass implements OnInit {
  funcionario: Funcionarios = {
    name: '',
    salario: 0,
    bonus: 0,
  };
  @Output()
  onsubmit: EventEmitter<Funcionarios> = new EventEmitter<Funcionarios>();

  constructor(private funcionarioService: FuncionarioService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
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
