function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Welcome to Your React App</h1>
        <p className="text-gray-500 mb-4">
          This is a simple, clean, and beautiful design using TailwindCSS.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default App;
