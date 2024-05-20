import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
