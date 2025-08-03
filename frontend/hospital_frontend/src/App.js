import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-500 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Hospital Management System</h1>
        <p className="mt-4 text-xl">Tailwind CSS is working! 🎉</p>
      </div>
    </div>
  );
}

export default App;