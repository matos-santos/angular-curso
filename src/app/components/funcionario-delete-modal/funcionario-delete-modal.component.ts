import { Component, OnInit, ElementRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Funcionarios } from '../../funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { ModalClass } from 'src/app/shared/modal/modalClass';

declare const $;

@Component({
  selector: 'funcionario-delete-modal',
  templateUrl: './funcionario-delete-modal.component.html',
  styleUrls: ['./funcionario-delete-modal.component.css']
})

export class FuncionarioDeleteModalComponent extends ModalClass implements OnInit {

  @Input()
  funcionario: Funcionarios;

  @Output()
  ondelete: EventEmitter<Funcionarios> = new EventEmitter<Funcionarios>();

  constructor(private element: ElementRef, private funcionariosService: FuncionarioService) {
    super();
   }

  ngOnInit() {
  }

  excluir() {
    const copy = Object.assign({}, this.funcionario)
    this.funcionariosService.deleteFuncionario(this.funcionario);
    this.ondelete.emit(copy);
    this.hide();
  }

}
