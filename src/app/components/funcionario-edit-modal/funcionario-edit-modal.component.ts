import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Funcionarios } from '../../funcionarios';
import { ModalClass } from '../../shared/modal/modalClass';

declare const $;
@Component({
  selector: 'funcionario-edit-modal',
  templateUrl: './funcionario-edit-modal.component.html',
  styleUrls: ['./funcionario-edit-modal.component.css']
})
export class FuncionarioEditModalComponent extends ModalClass implements OnInit {

  constructor() {
    super();
  }

  @Input()
  funcionario: Funcionarios;

  @Output()
  onedit: EventEmitter<Funcionarios> = new EventEmitter<Funcionarios>();

  ngOnInit() {
  }

  addFuncionario() {
    const copy = Object.assign({}, this.funcionario);
    this.onedit.emit(copy);
    this.hide();
  }
}
