import { Injectable } from '@angular/core';
export interface Funcionarios {
  name: string;
  salario: number;
  bonus: number;
}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  funcionarios: Funcionarios[] = [
    {name: 'Douglas', salario: 25000, bonus: 5},
    {name: 'Adriana', salario: 5000, bonus: 10},
    {name: 'Bernardo', salario: 35000, bonus: 15},
    {name: 'Bruno', salario: 55000, bonus: 20},
    {name: 'Heloisa', salario: 95000, bonus: 35}
  ];

  constructor() { }

  addFuncionario(funcionario: Funcionarios) {
    funcionario.bonus = funcionario.salario > 6000 ? funcionario.bonus : 0;
    this.funcionarios.push(funcionario);
  }

  deleteFuncionario(funcionario: Funcionarios) {
    const item = this.funcionarios.indexOf(funcionario);

    this.funcionarios.splice(item, 1);
  }
}
