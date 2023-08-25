import { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import two from 'public/parallax2.png';
import one from 'public/parallax1.svg';
import three from 'public/parallax3.png';
import four from 'public/parallax4.png';
import Options from "@/pages/menu";
export default function ParallaxHome() {
  const ref = useRef();
  return (
      <div>
     <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1.3}
          factor={1}
          style={{
            backgroundImage: `url(${one.src})`,
            backgroundSize: 'cover',
          }}
        ><Options></Options></ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${two.src})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

         <ParallaxLayer
          offset={2}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${three.src})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

                 <ParallaxLayer
          offset={3}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${four.src})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>
      </Parallax>
    </div>
  );
}
