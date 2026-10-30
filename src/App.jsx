import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Programmes from './pages/Programmes.jsx';
import Admissions from './pages/Admissions.jsx';
import Requirements from './pages/Requirements.jsx';
import Apply from './pages/Apply.jsx';
import News from './pages/News.jsx';
import Article from './pages/Article.jsx';
import Staff from './pages/Staff.jsx';
import Downloads from './pages/Downloads.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const { pathname } = useLocation();
  const main = useRef(null);
  useEffect(() => { window.scrollTo(0, 0); main.current?.focus({ preventScroll: true }); }, [pathname]);
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} ref={main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<Article />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
