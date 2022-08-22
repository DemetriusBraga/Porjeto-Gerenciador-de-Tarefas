import { Tarefa } from './../shared/tarefa.model';
import { TarefasService } from './../shared/tarefas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})
export class ListarTarefaComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(private tarefasService: TarefasService) {}

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefasService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?'))
      this.tarefasService.remover(tarefa.id);
    this.tarefas = this.listarTodos();
  }

  alterarStatus(tarefa: Tarefa): void {
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?'))
      this.tarefasService.alteraStatus(tarefa.id);
    this.tarefas = this.tarefasService.listarTodos();
  }
}
