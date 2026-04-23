import { Todo } from "./data/todos";

export namespace Storage {
  export function save(todos: Todo[]): void {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  export function load(): Todo[] {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  }
}