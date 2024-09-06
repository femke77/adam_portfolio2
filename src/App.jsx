// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { CssBaseline } from '@mui/material';
import "./App.css"

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <CssBaseline />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;
