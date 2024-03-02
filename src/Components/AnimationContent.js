import React from "react";
import { useSpring, animated } from "react-spring";

const AnimationContent = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
      <h1>Smooth Animation Content</h1>
      <p>This text fades in smoothly using React Spring.</p>
    </animated.div>
  );
};

export default AnimationContent;
