import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Funcionarios } from '../funcionarios';
import { FuncionarioService } from '../funcionario.service';

declare const $;

@Component({
  selector: 'funcionario-delete-modal',
  templateUrl: './funcionario-delete-modal.component.html',
  styleUrls: ['./funcionario-delete-modal.component.css']
})

export class FuncionarioDeleteModalComponent implements OnInit {
  @Input()
  funcionario: Funcionarios;

  @Output()
  ondelete: EventEmitter<Funcionarios> = new EventEmitter<Funcionarios>();

  constructor(private element: ElementRef, private funcionariosService: FuncionarioService) { }

  ngOnInit() {
  }

  excluir() {
    const copy = Object.assign({}, this.funcionario)
    this.funcionariosService.deleteFuncionario(this.funcionario);
    this.ondelete.emit(copy)
    this.hide();
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

  show() {
    const modalDiv = this.getDivModal();
    $(modalDiv).modal('show');
  }

  hide() {
    const modalDiv = this.getDivModal();
    $(modalDiv).modal('hide');
  }

}
