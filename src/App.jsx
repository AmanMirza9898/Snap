import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import WebDevelopment from './pages/WebDevelopment';
import WebApps from './pages/WebApps';
import CustomSoftwares from './pages/CustomSoftwares';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/web-apps" element={<WebApps />} />
            <Route path="/services/custom-softwares" element={<CustomSoftwares />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
