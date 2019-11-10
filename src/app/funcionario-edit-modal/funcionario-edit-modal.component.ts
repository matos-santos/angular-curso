import { Component, OnInit, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Funcionarios } from '../funcionarios';

declare const $;
@Component({
  selector: 'funcionario-edit-modal',
  templateUrl: './funcionario-edit-modal.component.html',
  styleUrls: ['./funcionario-edit-modal.component.css']
})
export class FuncionarioEditModalComponent implements OnInit {

  constructor(private element: ElementRef) { }

  @Input()
  funcionario: Funcionarios;

  @Output()
  onedit: EventEmitter<Funcionarios> = new EventEmitter<Funcionarios>();

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
    this.onedit.emit(copy);
    this.hide();
  }
}
