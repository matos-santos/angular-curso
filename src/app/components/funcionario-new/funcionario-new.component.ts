import { Component, OnInit } from '@angular/core';

import {Funcionarios} from '../../funcionarios';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'funcionario-new',
  templateUrl: './funcionario-new.component.html',
  styleUrls: ['./funcionario-new.component.css']
})
export class FuncionarioNewComponent implements OnInit {

  funcionario: Funcionarios = {
    name: '',
    salario:0,
    bonus: 0,
  }

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
  }

  addFuncionario () {
    const copy = Object.assign({}, this.funcionario)
    this.funcionarioService.addFuncionario(copy)
    console.log('funcionarios', this.funcionarioService.funcionarios)
    this.funcionario = {
      name: '',
      salario: 0,
      bonus: 0
    }
  }
}
