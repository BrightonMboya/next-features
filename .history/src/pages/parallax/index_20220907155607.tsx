import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
  return (
    <div>
      <Parallax pages={5}>
        <ParallaxLayer speed={0.5} offset={0} className="bg-red-200">
          <p>Scroll down</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
