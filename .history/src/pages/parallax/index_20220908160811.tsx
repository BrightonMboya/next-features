import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

export default function App() {
  const ref = useRef<any>();
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }} ref={ref}>
      <ParallaxLayer
        speed={2.5}
        className="flex justify-center items-center bg-gradient-to-b from-[#d299c2] to-[#764ba2] h-[100vh] w-[100vw]"
      >
        <p>Scroll down</p>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        className="flex justify-center items-center bg-gradient-to-b from-[#e66465] to-[#9198e5] h-[100vh] w-[100vw]"
        // style={{ backgroundColor: "#ff6d6d" }}
      >
        <h3>Second Page</h3>
      </ParallaxLayer>

      {/* <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white"
        }}
      >
        <p>Scroll up</p>
      </ParallaxLayer> */}
    </Parallax>
  );
}
