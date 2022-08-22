import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TarefasService, TarefaConcluidaDirective } from './shared';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
  ],
  providers: [TarefasService],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class TarefasModule {}
