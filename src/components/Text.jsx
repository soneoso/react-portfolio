
import React, { useState, useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

function Home() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
    
    let logoItem = useRef(null);
    useEffect(() => {
        console.log(logoItem);
        TweenMax.to(
            logoItem,
            .8,
            {
                opacity: 1,
                duration: 400,
                delay: 0.5,
                y: -20,
                ease: Power3.easeOut
            }
        )
    }, []);

  return (
    <div className="container">
      <button ref={el => {logoItem = el}} className="text-white" onClick={handleClick}>
         { active ? "MENU" : "CLOSE"}
      </button>
    </div>
  );
}

export default Home;