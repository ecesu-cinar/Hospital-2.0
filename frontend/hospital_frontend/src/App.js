import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-500 text-white p-8 text-center">
        <h1 className="text-4xl font-bold">Hospital 2.0</h1>
        <p className="mt-4 text-xl">Tailwind çalışıyor rahhhhh</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;