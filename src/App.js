import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { Inflatables } from './pages/inflatables';
import { ContactUs } from './pages/contactUs';
import { YardGames } from './pages/yardGames';
import { YardCards } from './pages/yardCards';
import { EventsGallery } from './pages/eventsGallery';
import { Blog } from './pages/blog';
import { FAQs } from './pages/FAQs';
import { CustomerGallery } from './pages/customerGallery';
import { Misc } from './pages/misc';
import { DunkTanks } from './pages/dunkTanks';
import { HolidayRates } from './pages/holiday';
import { OrderByDate } from './pages/orderByDate';
import { Packages } from './pages/packages';
import { Combos } from './pages/combos';
import { DryBounceHouses } from './pages/dryBounceHouses';

export const App = () => {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/inflatables" element={<Inflatables />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path='/yardgames' element={<YardGames />} />
        <Route path='/yardcards' element={<YardCards />} />
        <Route path='/eventsgallery' element={<EventsGallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/customergallery' element={<CustomerGallery />} />
        <Route path='/misc' element={<Misc />} />
        <Route path='/dunktanks' element={<DunkTanks />} />
        <Route path='/holidayrates' element={<HolidayRates />} />
        <Route path='/orderbydate' element={<OrderByDate />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/combos' element={<Combos />} />
        <Route path='/drybouncehouses' element={<DryBounceHouses />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};


