import { useSpring, animated } from "react-spring";

export default function Index() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <animated.h3 style={props} className="bg-red-500">
      I will fade in
    </animated.h3>
  );
}
