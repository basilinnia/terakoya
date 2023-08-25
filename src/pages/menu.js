import arrow from 'public/next.png';
import {useEffect, useState} from "react";

export default function Options() {
  const options = ["Articles", "Japanese Periods", "Dictionaries", "Legacy Library", "Art Gallery", "Contacts"];
  const [paddingTop, setPaddingTop] = useState('');

  useEffect(() => {
    const calculatePaddingTop = () => {
    const windowHeight = window.innerHeight;
    if (window.innerWidth > 903 && window.innerHeight > 634) {
      setPaddingTop(`${windowHeight * (11 / 20)}px`);
    } else {
      setPaddingTop(`${windowHeight * (3 / 5)}px`);
    }
  };

  calculatePaddingTop();
  window.addEventListener('resize', calculatePaddingTop);
  return () => {
    window.removeEventListener('resize', calculatePaddingTop);
  };
  }, []);

  return (
    <nav style={{ paddingTop }}>
      {options.map((option, i) => (
        <div key={i} className="display flex items-center align-center">
          <img className="h-5 ps-5 pe-3.5" src={arrow.src} alt="Arrow" />
          <span className="option">{option}</span>
        </div>
      ))}
    </nav>
  );
}
