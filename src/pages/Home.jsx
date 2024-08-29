import Layout from "../components/layouts/Layout";
import About from "../components/home/About";
import Intro from "../components/home/Intro";
import Portfolio from "../components/home/Portfolio";
import Skills from "../components/home/Skills";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Home() {
  return (
     <div className="container-body">
        <ParallaxBanner
        // className="bg-container"
          layers={[
              
             
                {
                  image:
                    "https://t3.ftcdn.net/jpg/03/03/58/82/240_F_303588274_fP4WXpkza4Vxy0hNwHT6XCmnF61ZhcEC.jpg",
                  speed: 25,
                
                },
           ]}
  
        >
         <div className="bg-container">
                  <h1 className="text">Hello World!</h1>
                <Intro/>
                </div>
        </ParallaxBanner>
       
        </div>
    

  );
}
