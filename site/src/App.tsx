import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Resources from "./pages/Resources";
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Streams from './pages/Streams';
import Ebooks from './pages/Ebooks';
import Events from './pages/Events';
import Reason from './pages/Reason';
import { useLayoutEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './component/Navbar';
import { ReactNode } from "react";

function App() {
  useLayoutEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
    window.codySettings = { widget_id: '9c3dc3c3-e9af-4f23-9090-f93e4cc312e2' };

    !function(){var t=window,e=document,a=function(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://trinketsofcody.com/cody-widget.js";var a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)};"complete"===document.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}();
    `;
    document.body.appendChild(script);
  }, []);

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode='sync'>
      <Navbar/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/resources" element={<PageWrapper><Resources /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/stream" element={<PageWrapper><Streams /></PageWrapper>} />
        <Route path="/ebooks" element={<PageWrapper><Ebooks /></PageWrapper>} />
        <Route path="/event" element={<PageWrapper><Events /></PageWrapper>} />
        <Route path="/faith-reason" element={<PageWrapper><Reason /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

const PageWrapper:React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
