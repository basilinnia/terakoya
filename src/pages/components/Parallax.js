import Options from "../../pages/components/Options";
import React from 'react';
import image1 from 'public/parallax1.png';
import image2 from 'public/parallax2.png';
import image3 from 'public/parallax3.png';
import image4 from 'public/parallax4.png';
import image5 from 'public/parallax5.png';

export default function ParallaxHome() {
    return (
        <div className="parallax relative overflow-hidden">
            <div className="parallax-element" style={{ backgroundImage: `url(${image1.src})` }}>
                <Options />
            </div>
             <div className="parallax-element" style={{ backgroundImage: `url(${image2.src})` }}>
            </div>
             <div className="parallax-element" style={{ backgroundImage: `url(${image3.src})` }}>
            </div>
             <div className="parallax-element" style={{ backgroundImage: `url(${image4.src})` }}>
            </div>
             <div className="parallax-element" style={{ backgroundImage: `url(${image5.src})` }}>
            </div>
        </div>
    );
}
