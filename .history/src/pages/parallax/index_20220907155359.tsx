import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function App() {
  return (
    <div>
      <Parallax pages={5}>
        <ParallaxLayer speed={2.5} offset={}></ParallaxLayer>
      </Parallax>
    </div>
  );
}
