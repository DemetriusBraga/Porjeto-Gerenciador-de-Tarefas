import { EditarTarefaComponent } from './editar/editar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar';
import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar',
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent,
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent,
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent,
  },
];
