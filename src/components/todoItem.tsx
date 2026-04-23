import { Todo } from "../data/todos";

interface TodoItemProps {
  key: string;
  todo: Todo;
  handleToggle: (id: string) => void;
}

export default function TodoItem({ key, todo, handleToggle }: TodoItemProps) {
  return <li className={`todo-item ${todo.completed ? 'completed' : ''}`} key={key} onClick={() => handleToggle(todo.id)}>
    <span>{todo.text}</span>
  </li>;
}