import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
  return (
    <div className="absolute w-[100vw] h-[100vh] bottom-0 right-0 left-0 top-0">
      <Parallax pages={2}>
        <ParallaxLayer
          speed={0.5}
          //   offset={0}
          className="flex items-center justify-center text-4xl bg-gradient-to-b from-[#e66465] to-[#9198e5]"
        >
          <p>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer
          speed={1}
          className="bg-red-200 flex items-center justify-center text-4xl bg-gradient-to-b from-[#d299c2] to-[#764ba2]"
        >
          <p>Second Page</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}