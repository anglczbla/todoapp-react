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

  // Function untuk toggle status completed todo
  const toggleTodo = (todoId) => {
    setTodos(todos.map(todo => 
      todo.id === todoId 
        ? { ...todo, completed: !todo.completed } // Toggle completed status
        : todo // Kembalikan todo yang tidak berubah
    ));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="title">📝 Todo App - Step 3</h1>
        
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
              {/* Checkbox untuk toggle status - SEKARANG INTERACTIVE */}
              <input 
                type="checkbox" 
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)} // Handle click
                className="todo-checkbox"
              />
              
              {/* Text todo dengan styling conditional + click to toggle */}
              <span 
                className={`todo-text ${todo.completed ? 'strikethrough' : ''}`}
                onClick={() => toggleTodo(todo.id)} // Bisa diklik untuk toggle
                style={{ cursor: 'pointer' }}
              >
                {todo.text}
              </span>
              
              {/* Status badge */}
              <span className={`status-badge ${todo.completed ? 'status-completed' : 'status-pending'}`}>
                {todo.completed ? 'Selesai' : 'Belum'}
              </span>
            </div>
          ))}
        </div>
        <div className="next-step">
          <button 
            disabled
            className="btn-disabled"
          >
            Next: Step 4 - Delete Todo Feature
          </button>
        </div>
      </div>
    </div>
  );
}

export default App