import Layout from "../components/layouts/Layout";
import About from "../components/home/About";
import Intro from "../components/home/Intro";
import Portfolio from "../components/home/Portfolio";
import Skills from "../components/home/Skills";
import Footer from "../components/Footer";
import Welcome from "../components/home/Welcome";
import Box from "@mui/material/Box";
export default function Home() {
  return (
    <Box bgcolor={"black"}>
      <Welcome />
      <Intro />
      <About />
      <Portfolio />
      <Skills />
      <Footer />
    </Box>
  );
}
