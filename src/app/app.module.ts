import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';
import { FuncionarioNewComponent } from './components/funcionario-new/funcionario-new.component';
import { SalarioCorDirective } from './directives/salario-cor.directive';
import { FuncionarioNewModalComponent } from './components/funcionario-new-modal/funcionario-new-modal.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { FuncionarioEditModalComponent } from './components/funcionario-edit-modal/funcionario-edit-modal.component';
import { FuncionarioDeleteModalComponent } from './components/funcionario-delete-modal/funcionario-delete-modal.component';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListComponent,
    FuncionarioNewComponent,
    SalarioCorDirective,
    FuncionarioNewModalComponent,
    AlertSuccessComponent,
    FuncionarioEditModalComponent,
    FuncionarioDeleteModalComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
