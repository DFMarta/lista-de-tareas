import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Tareas {
  private localStorageKey = 'listaTareas';

  getTareas(): string[] {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('listaTareas') || '[]');
    }
    return [];
  }

  agregarTarea(tarea: string) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }

  eliminarTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }
}
