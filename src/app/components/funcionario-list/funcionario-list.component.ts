import { Component, OnInit, ViewChild } from '@angular/core';
import { Funcionarios} from '../../funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';
import { FuncionarioNewModalComponent } from '../funcionario-new-modal/funcionario-new-modal.component';
import { FuncionarioEditModalComponent } from '../funcionario-edit-modal/funcionario-edit-modal.component';
import { FuncionarioDeleteModalComponent } from '../funcionario-delete-modal/funcionario-delete-modal.component';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})

export class FuncionarioListComponent implements OnInit {
  funcionario: Funcionarios;
  funcionarioNovo = false;
  funcionarioEdit: Funcionarios;
  funcionarioDelete: Funcionarios;
  // data = new Date();
  data = '2019-11-10T08:56:01';
  @ViewChild(FuncionarioNewModalComponent, {static: false})
  funcionarioNewModal: FuncionarioNewModalComponent;
  @ViewChild(FuncionarioEditModalComponent, {static: false})
  funcionarioEditModal: FuncionarioEditModalComponent;
  @ViewChild(FuncionarioDeleteModalComponent, {static: false})
  funcionarioDeleteModal: FuncionarioDeleteModalComponent;

  constructor(public funcionarioService: FuncionarioService) { }

  ngOnInit() { }

  show() {
    this.funcionarioNewModal.show();
  }
  cadastroNovo(e: Funcionarios) {
    this.funcionario = e;
    this.funcionarioNovo = true;
  }
  getSalarioColor(item) {
    return item.salario > 20000 ? 'green' : null;
  }
  getSalario2(item) {
    if (item.salario >= 500) {
      return 'salario-grande';
    }
    return 'salario-pequeno';
  }

  openModalEdit(item) {
    this.funcionarioEditModal.funcionario = item;
    this.funcionarioEditModal.show();
  }

  openModalDelete(item) {
    this.funcionarioDelete = item;
    this.funcionarioDeleteModal.show();
  }

  onDelete(item) {
    console.log('delete', item);
  }

  onEdit(item) {
    console.log('edit', item);
  }
}
