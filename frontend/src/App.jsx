import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import ShowUser from './components/ShowUser';
import Kelaspage from './pages/Kelaspage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/Footercomponent';
import Homepages from './pages/Homepages';
import Testimonialpage from './pages/Testimonialpage';
import Faqpages from './pages/Faqpages';
import SyaratKetenPage from './pages/SyaratKetenPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div>
      {!isLoginPage && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kelas" element={<Kelaspage />} />
        <Route path="/home" element={<Homepages />} />
        <Route path="/testimonial" element={<Testimonialpage />} />
        <Route path="/faq" element={<Faqpages />} />
        <Route path="/syaratketen" element={<SyaratKetenPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/showuser" element={<ShowUser />} />
      </Routes>
      {!isLoginPage && <FooterComponent />}
    </div>
  );
}

export default App;
