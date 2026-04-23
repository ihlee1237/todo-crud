import { useState } from 'react';
import './App.css';
import FilterItem from './components/filterItem';
import TodoItem from './components/todoItem';
import { FilterType, generateId, initialTodos, Todo } from './data/todos';

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<FilterType>('all');
  const [inputValue, setInputValue] = useState('');

  function makeTodoItem(text: string): Todo {
    return {
      id: generateId(),
      text,
      completed: false,
      createdAt: new Date()
    }
  }

  function clearInput() {
    setInputValue('');
  }

  // TODO: 할 일 추가
  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        makeTodoItem(inputValue.trim()),
      ]);
      clearInput();
    }
  };

  // TODO: 완료 토글
  const handleToggle = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // TODO: 삭제
  const handleDelete = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // TODO: 필터링된 목록
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // TODO: 남은 할 일 개수
  const remainingCount = 0;

  return (
    <div className="app">
      <h1>할 일 목록</h1>

      {/* 입력 영역 */}
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요"
          className="todo-input"
          onKeyUp={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd} className="add-button">
          추가
        </button>
      </div>

      {/* TODO: 필터 버튼 */}
      <FilterItem filter={filter} setFilter={setFilter} />

      {/* TODO: 할 일 목록 */}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} />
        ))}
      </ul>

      {/* TODO: 카운터 */}
      <div className="counter">{remainingCount}개 남음</div>
    </div>
  );
}

export default App;
