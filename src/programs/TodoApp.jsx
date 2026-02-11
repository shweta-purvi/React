import { useState } from 'react';
import './TodoApp.css';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h2>📝 My Tasks</h2>
        <div className="todo-input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new task..."
          />
          <button onClick={addTodo}>Add</button>
        </div>
        
        <div className="todos-list">
          {todos.length === 0 ? (
            <p className="empty-state">No tasks yet. Add one to get started! 🚀</p>
          ) : (
            todos.map(todo => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span>{todo.text}</span>
                <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>×</button>
              </div>
            ))
          )}
        </div>
        
        <div className="todo-stats">
          <span>Total: {todos.length}</span>
          <span>Completed: {todos.filter(t => t.completed).length}</span>
        </div>
      </div>
    </div>
  );
}
