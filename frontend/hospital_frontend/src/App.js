import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import News from './pages/News';
import DetailedNews from './pages/DetailedNews';
import AboutUs from './pages/AboutUs';
import MedicalUnits from './pages/MedicalUnits';
import DetailedMedicalUnits from './pages/DetailedMedicalUnits'
import Doctors from './pages/Doctors';
import DetailedDoctors from './pages/DetailedDoctors'
import Contact from './pages/Contact';
import '@splidejs/splide/css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/haberler" element={<News />} />
            <Route path="/haberler/:id" element={<DetailedNews />} />
            <Route path="/hakkimizda" element={<AboutUs />} />
            <Route path="/tibbi-birimler" element={<MedicalUnits />} />
            <Route path="/tibbi-birimler/:id" elemnt = {<DetailedMedicalUnits/>}/>
            <Route path="/hekimler" element={<Doctors />} />
            <Route path="/hekimler/:id" elemnt = {<DetailedDoctors />}/>
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
