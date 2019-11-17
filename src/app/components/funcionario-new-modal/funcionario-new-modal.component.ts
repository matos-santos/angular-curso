import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Funcionarios } from '../../funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ModalClass } from '../../shared/modal/modalClass';

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

  @ViewChild('inputName', {static: true})
  inputName: ElementRef;

  @Output()
  onsubmit: EventEmitter<Funcionarios> = new EventEmitter<Funcionarios>();

  constructor(private funcionarioService: FuncionarioService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    console.log('this', this)
    this.onShow.subscribe(event => {
      console.log('e', event)
      console.log(this.inputName)
      this.inputName.nativeElement.focus();
    });
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
