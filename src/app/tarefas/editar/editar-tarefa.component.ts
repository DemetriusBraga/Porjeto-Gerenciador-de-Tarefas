import { TarefasService } from './../shared/tarefas.service';
import { Tarefa } from './../shared/tarefa.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css'],
})
export class EditarTarefaComponent implements OnInit {
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefasService: TarefasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // o + converte a string para numérico
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefasService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefasService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
