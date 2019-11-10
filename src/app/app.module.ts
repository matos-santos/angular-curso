import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioNewComponent } from './funcionario-new/funcionario-new.component';
import { SalarioCorDirective } from './salario-cor.directive';
import { FuncionarioNewModalComponent } from './funcionario-new-modal/funcionario-new-modal.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { FuncionarioEditModalComponent } from './funcionario-edit-modal/funcionario-edit-modal.component';
import { FuncionarioDeleteModalComponent } from './funcionario-delete-modal/funcionario-delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListComponent,
    FuncionarioNewComponent,
    SalarioCorDirective,
    FuncionarioNewModalComponent,
    AlertSuccessComponent,
    FuncionarioEditModalComponent,
    FuncionarioDeleteModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
