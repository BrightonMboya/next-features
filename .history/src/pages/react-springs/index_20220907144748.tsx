import { useSpring, animated } from "react-spring";
import { useState } from "react";

export default function Index() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    // config: config.molasses,
    onRest: () => setFlip(!flip)
  });
  return (
    <animated.h3
      style={props}
      className="bg-red-500 h-[300px] w-[300px] flex items-center justify-center text-3xl"
    >
      I will fade in
    </animated.h3>
  );
}
