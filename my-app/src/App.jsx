import { useState } from 'react'
import './App.css'

function App() {
  // State untuk menyimpan array todos
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

  // State untuk input form (controlled component)
  const [inputValue, setInputValue] = useState('');

  // Function untuk menambah todo baru
  const addTodo = (e) => {
    e.preventDefault(); // Mencegah form submit refresh halaman
    
    // Validasi: jangan tambah todo kosong
    if (inputValue.trim() === '') {
      alert('Todo tidak boleh kosong!');
      return;
    }

    // Buat todo baru
    const newTodo = {
      id: Date.now(), // Simple ID generator (dalam app nyata pakai UUID)
      text: inputValue.trim(),
      completed: false
    };

    // Update state todos dengan todo baru
    setTodos([...todos, newTodo]); // Spread operator untuk immutability
    
    // Reset input field
    setInputValue('');
  };

  // Function untuk handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="title">📝 Todo App - Step 2</h1>
        
        {/* Form untuk menambah todo baru */}
        <form onSubmit={addTodo} className="add-todo-form">
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Masukkan todo baru..."
              className="todo-input"
            />
            <button type="submit" className="add-btn">
              ➕ Tambah
            </button>
          </div>
        </form>
        
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
          <h3 className="info-title">🎯 Yang Dipelajari di Step 2:</h3>
          <ul className="info-list">
            <li><strong>Controlled Components</strong> - Input dengan value dari state</li>
            <li><strong>Event Handling</strong> - onSubmit dan onChange</li>
            <li><strong>preventDefault()</strong> - Mencegah form refresh halaman</li>
            <li><strong>Spread Operator</strong> - [...todos, newTodo] untuk immutability</li>
            <li><strong>Form Validation</strong> - Cek input tidak kosong</li>
            <li><strong>State Updates</strong> - Menambah item ke array state</li>
          </ul>
        </div>
        
        <div className="next-step">
          <button 
            disabled
            className="btn-disabled"
          >
            Next: Step 3 - Toggle Complete Feature
          </button>
        </div>
      </div>
    </div>
  );
}

export default App