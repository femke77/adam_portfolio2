// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import {CssBaseline} from '@mui/material';
import { ParallaxProvider } from "react-scroll-parallax";
import './App.css';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <ParallaxProvider
>     <CssBaseline />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      </ParallaxProvider> 
    </>
  );
}

export default App;
