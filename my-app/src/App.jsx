import { useState } from 'react'
import './App.css'

function App() {
  // State untuk menyimpan array todos
  // mulai dengan beberapa data dummy untuk belajar
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Belajar React basics",
      completed: false
    },
    {
      id: 2, 
      text: "Membuat Todo App",
      completed: false
    },
    {
      id: 3,
      text: "Deploy ke Netlify", 
      completed: true
    }
  ]);

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="title">📝 Todo App - Step 1</h1>
        
        {/* Menampilkan daftar todos */}
        <div className="todo-list">
          <h2 className="subtitle">
            Daftar Todo ({todos.length} items)
          </h2>
          
          {/* Mapping array todos menjadi list items */}
          {todos.map(todo => (
            <div 
              key={todo.id}
              className={`todo-item ${todo.completed ? 'completed' : 'pending'}`}
            >
              {/* Checkbox untuk menunjukkan status */}
              <input 
                type="checkbox" 
                checked={todo.completed}
                readOnly
                className="todo-checkbox"
              />
              
              {/* Text todo dengan styling conditional */}
              <span className={`todo-text ${todo.completed ? 'strikethrough' : ''}`}>
                {todo.text}
              </span>
              
              {/* Status badge */}
              <span className={`status-badge ${todo.completed ? 'status-completed' : 'status-pending'}`}>
                {todo.completed ? 'Selesai' : 'Belum'}
              </span>
            </div>
          ))}
        </div>
        
        {/* Info box untuk penjelasan */}
        <div className="info-box">
          <h3 className="info-title">🎯 Yang Dipelajari di Step 1:</h3>
          <ul className="info-list">
            <li><strong>useState</strong> - Menyimpan array todos dalam state</li>
            <li><strong>map()</strong> - Mengubah array menjadi JSX elements</li>
            <li><strong>key prop</strong> - Identifier unik untuk setiap list item</li>
            <li><strong>Conditional styling</strong> - Style berbeda berdasarkan status</li>
            <li><strong>Template literals</strong> - Dynamic CSS classes</li>
          </ul>
        </div>
        
        <div className="next-step">
          <button 
            disabled
            className="btn-disabled"
          >
            Next: Step 2 - Add Todo Feature
          </button>
        </div>
      </div>
    </div>
  );
}

export default App