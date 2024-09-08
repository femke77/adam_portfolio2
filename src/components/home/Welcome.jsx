import { useEffect } from "react";
import "./Welcome.css";
import * as Scroll from "react-scroll";
export default function Welcome() {
  const scroller = Scroll.scroller;

  const goToPageAndScroll = (selector) => {
    scroller.scrollTo(selector, {
      duration: 1500,
      offset: -75,
      spy: true,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      goToPageAndScroll("intro");
    }, 4000);
  }, []);

  return (
    <div className="animated-title">
      <div className="text-top">
        <div>
          <span>Adam </span>
          <span>Mathis</span>
        </div>
      </div>
      <div className="text-bottom">
        <div>Web Developer</div>
      </div>
    </div>
  );
}
