import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
  return (
    <div>
      <Parallax pages={5}>
        <ParallaxLayer
          speed={0.5}
          offset={0}
          className="bg-red-200 flex items-center justify-center text-4xl bg-gradient-to-b "
        >
          <p>Scroll down</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
