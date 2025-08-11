import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import News from './pages/News';
import AboutUs from './pages/AboutUs';
import MedicalUnits from './pages/MedicalUnits';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import '@splidejs/splide/css';

function App() {
  const NewsDetail = () => {
    return <div>News detail page - coming soon</div>;
  };
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/haberler" element={<News />} />
            <Route path="/haberler/:id" element={<NewsDetail />} />
            <Route path="/hakkımızda" element={<AboutUs />} />
            <Route path="/medikal-unitler" element={<MedicalUnits />} />
            <Route path="/doctorlar" element={<Doctors />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
