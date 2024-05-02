import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Inflatables } from './pages/inflatables';
import { ContactUs } from './pages/contactUs';

export const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inflatables" element={<Inflatables />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};


