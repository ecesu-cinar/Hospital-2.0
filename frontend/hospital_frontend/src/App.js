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
import PageNotFound from './pages/PageNotFound';

import AdminLogin from './pages/admin/AdminLogin';
import AdminPanel from './pages/admin/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';

import ForgotPassword from "./pages/admin/ForgotPassword";

import AdminNavbar from './components/AdminNavbar';
import Settings from './pages/admin/Settings';

import '@splidejs/splide/css';

function App() {
  
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
          {/* Admin routes no navbar or footer */}
          <Route path="/dashboard" element={<AdminLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          
          <Route path="/dashboard/*" element={
              <ProtectedRoute>
                <>
                  <AdminNavbar />
                  <main>
                    <Routes>
                      <Route path="/admin-panel" element={<AdminPanel />} />
                      <Route path="/ayarlar" element={<Settings />} />
                    </Routes>
                  </main>
                </>
              </ProtectedRoute>
            } />
          
          {/* Customer routes with navbar and footer */}
          <Route path="*" element={
            <>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/haberler" element={<News />} />
                  <Route path="/haberler/:id" element={<DetailedNews />} />
                  <Route path="/hakkimizda" element={<AboutUs />} />
                  <Route path="/tibbi-birimler" element={<MedicalUnits />} />
                  <Route path="/tibbi-birimler/:id" element={<DetailedMedicalUnits/>}/>
                  <Route path="/hekimler" element={<Doctors />} />
                  <Route path="/hekimler/:id" element={<DetailedDoctors />}/>
                  <Route path="/iletisim" element={<Contact />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
