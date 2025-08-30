import { Component, inject, OnInit, signal } from '@angular/core';
import { Tareas } from './service/tareas';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  listaTareas = signal<string[]>([]);
  nuevaTarea: string = '';

  private _tareaService = inject(Tareas);

  ngOnInit(): void {
    this.listaTareas.set(this._tareaService.getTareas());
  }

  agregarTarea() {
    this._tareaService.agregarTarea(this.nuevaTarea);
    this.listaTareas.set(this._tareaService.getTareas());
    this.nuevaTarea = '';
  }

  eliminarTarea(index: number) {
    this._tareaService.eliminarTarea(index);
    this.listaTareas.set(this._tareaService.getTareas());
  }
}
