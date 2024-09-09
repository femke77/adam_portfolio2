import React, { useEffect, useState, useRef } from 'react';


const Intro = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    // Function to apply animation
    const applyAnimation = () => {
      if (textElement) {
        let newDom = '';
        const animationDelay = 50; // Adjust delay as needed

        for (let i = 0; i < textElement.innerText.length; i++) {
          newDom += `<span class="char">${textElement.innerText[i] === ' ' ? '&nbsp;' : textElement.innerText[i]}</span>`;
        }

        textElement.innerHTML = newDom;
        const length = textElement.children.length;

        for (let i = 0; i < length; i++) {
          textElement.children[i].style.animationDelay = `${animationDelay * i}ms`;
        }

        // Make text visible
        textElement.style.opacity = '1';
      }
    };

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            applyAnimation();
            observer.unobserve(textElement);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (textElement) {
      observer.observe(textElement);
    }

    return () => {
      if (textElement) {
        observer.unobserve(textElement);
      }
    };
  }, []);

  return (
    <div className="center">
      <p ref={textRef}>
        Hey, I'm Adam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate incidunt praesentium, rerum voluptatem in reiciendis officia harum repudiandae tempore suscipit ex ea, adipisci ab porro.
      </p>
    </div>
  );
};


export default Intro;

