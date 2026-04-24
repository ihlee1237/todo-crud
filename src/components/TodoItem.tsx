import { Todo } from "../data/todos";

interface TodoItemProps {
  todo: Todo;
  handleToggle: (id: string) => void;
  handleDelete: (id: string) => void;
}

export default function TodoItem({ todo, handleToggle, handleDelete }: TodoItemProps) {
  function onClickDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    handleDelete(todo.id);
  }

  return <li className={`todo-item ${todo.completed ? 'completed' : ''}`} onClick={() => handleToggle(todo.id)}>
    <span>{todo.text}</span>
    <button className="delete-button" onClick={onClickDelete}>
      x
    </button>
  </li>;
}