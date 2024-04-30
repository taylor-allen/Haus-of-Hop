import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Inflatables } from './components/inflatables';
import { ContactUs } from './components/contactUs';
import { Home } from './components/home';

export const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inflatables" element={<Inflatables />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
};


