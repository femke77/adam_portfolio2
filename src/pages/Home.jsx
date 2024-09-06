import Layout from "../components/layouts/Layout"
import About from "../components/home/About"
import Intro from "../components/home/Intro"
import Portfolio from "../components/home/Portfolio"
import Skills from "../components/home/Skills"
import Footer from '../components/Footer';


export default function Home() {
    return (
        <Layout>
            <Intro />
            <About />
            <Portfolio />
            <Skills />
            <Footer />
        </Layout>
    )
}
