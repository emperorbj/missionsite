
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Resources from "./pages/Resources";
import { useEffect } from 'react';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.codySettings = { widget_id: '9c3dc3c3-e9af-4f23-9090-f93e4cc312e2' };

      !function(){var t=window,e=document,a=function(){var t=e.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://trinketsofcody.com/cody-widget.js";var a=e.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a)};"complete"===document.readyState?a():t.attachEvent?t.attachEvent("onload",a):t.addEventListener("load",a,!1)}();
    `;
    document.body.appendChild(script);
  }, []);

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
