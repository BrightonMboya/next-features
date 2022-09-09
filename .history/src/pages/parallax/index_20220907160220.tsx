import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
  return (
    <div>
      <Parallax pages={5}>
        <ParallaxLayer
          speed={0.5}
          //   offset={0}
          className="flex items-center justify-center text-4xl bg-gradient-to-b from-[#e66465] to-[#9198e5]"
        >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          className="bg-red-200 flex items-center justify-center text-4xl bg-gradient-to-b from-[#d299c2] to-[#764ba2]"
        >
          <p>Second Page</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
