import Layout from "../components/layouts/Layout"
import About from "../components/home/About"
import Intro from "../components/home/Intro"
import Portfolio from "../components/home/Portfolio"
import Skills from "../components/home/Skills"

export default function Home() {
    return (
        <Layout>
            <Intro />
            <Portfolio />
            <Skills />
            <About />
        </Layout>
    )
}