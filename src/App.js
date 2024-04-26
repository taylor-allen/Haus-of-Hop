import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigation';
import { Home } from './components/home';
import { Shop } from './components/shop';
import { ContactUs } from './components/contactUs';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};


