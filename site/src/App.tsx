
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Resources from "./pages/Resources";
import { useEffect } from 'react';
import Contact from './pages/Contact';
import About from './pages/About';
// import Blog from './pages/Blog';
// import Streams from './pages/Streams'
import Ebooks from './pages/Ebooks';
import Events from './pages/Events';
import FaithReason from './pages/FaithReason';

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
        {/* <Route path='/blog' element={<Blog/>}/> */}
        {/* <Route path='/stream' element={<Streams/>}/> */}
        <Route path='/ebooks' element={<Ebooks/>}/>
        <Route path='/event' element={<Events/>}/>
        <Route path='/faith-reason' element={<FaithReason/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
