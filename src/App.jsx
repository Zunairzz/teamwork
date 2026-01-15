import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';
import { Home } from './pages/Home.jsx';
import { Services } from './pages/Services.jsx';
import { Team } from './pages/Team.jsx';
import { Process } from './pages/Process.jsx';
import { Portfolio } from './pages/Portfolio.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { NotFound } from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/process" element={<Process />} />
            <Route path="/work" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
