import { useState } from 'react';


function App() {
  // State untuk menyimpan array todos
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React basics", completed: false },
    { id: 2, text: "Membuat Todo App", completed: false },
    { id: 3, text: "Deploy ke Netlify", completed: false },
  ]);

  // State untuk input form
  const [inputValue, setInputValue] = useState('');

  // Function untuk menambah todo baru
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('Todo tidak boleh kosong!');
      return;
    }
    const newTodo = { id: Date.now(), text: inputValue.trim(), completed: false };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Function untuk handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function untuk toggle status completed todo
  const toggleTodo = (todoId) => {
    setTodos(todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Function untuk menghapus todo
  const deleteTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  // Function untuk menghapus semua todo yang selesai
  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Hitung statistik
  const totalTodos = todos.length;
  const pendingTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-50 p-6">
      <div className="w-full max-w-md p-10 bg-white rounded-xl shadow-lg border-2 border-gray-300">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold flex items-center justify-center gap-2">
            <span role="img" aria-label="document">📄</span> Todo App
          </h1>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-blue-100 rounded-lg text-center">
            <span className="block text-sm text-gray-600">Total</span>
            <span className="block text-lg font-medium">{totalTodos}</span>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg text-center">
            <span className="block text-sm text-gray-600">Pending</span>
            <span className="block text-lg font-medium">{pendingTodos}</span>
          </div>
          <div className="p-4 bg-green-100 rounded-lg text-center">
            <span className="block text-sm text-gray-600">Selesai</span>
            <span className="block text-lg font-medium">{completedTodos}</span>
          </div>
        </div>

        {/* Form untuk menambah todo */}
        <form onSubmit={addTodo} className="mb-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Masukkan todo baru..."
              className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              ➕ Tambah
            </button>
          </div>
        </form>

        {/* Tombol Hapus Semua Selesai */}
        {completedTodos > 0 && (
          <button
            onClick={deleteCompletedTodos}
            className="w-full mb-6 p-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Hapus Semua yang Selesai ({completedTodos})
          </button>
        )}

        {/* Daftar Todo */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Daftar Todo</h2>
          {todos.map(todo => (
            <div
              key={todo.id}
              className={`flex items-center p-4 mb-4 rounded-lg border-2 border-gray-300 ${todo.completed ? 'bg-green-50' : 'bg-yellow-50'}`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-4 h-6 w-6 text-indigo-600 focus:ring-indigo-500"
              />
              <span
                className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                onClick={() => toggleTodo(todo.id)}
                style={{ cursor: 'pointer' }}
              >
                {todo.text}
              </span>
              <span className={`px-3 py-2 rounded text-sm ${todo.completed ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                {todo.completed ? 'Selesai' : 'Pending'}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-4 p-2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <span role="img" aria-label="trash">🗑️</span>
              </button>
            </div>
          ))}
        </div>

        {/* Tombol Next */}
       
      </div>
    </div>
  );
}

export default App;