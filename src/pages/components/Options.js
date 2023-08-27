import arrow from 'public/next.png';
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Options() {
  const options = ["Articles", "Japanese Periods", "Dictionaries", "Legacy Library", "Art Gallery", "Contacts"];
  const [paddingTop, setPaddingTop] = useState('');
    const router = useRouter();


  useEffect(() => {
    const calculatePaddingTop = () => {
    const windowHeight = window.innerHeight;
    if (window.innerWidth > 768 || window.innerHeight > 634) {
      setPaddingTop(`${windowHeight * (12 / 20)}px`);
    } else {
      setPaddingTop(`${windowHeight * (4 / 10)}px`);
    }
  };

  calculatePaddingTop();
  window.addEventListener('resize', calculatePaddingTop);
  return () => {
    window.removeEventListener('resize', calculatePaddingTop);
  };
  }, []);

  return (
    <nav className="cursor-pointer" style={{ paddingTop }}>
      {options.map((option, i) => (
        <div key={i}  onClick={() => router.push("/" + option)} className="display flex items-center align-center">
          <img className="h-5 ps-7 pe-3.5" src={arrow.src} alt="Arrow" />
          <span className="option">{option}</span>
        </div>
      ))}
    </nav>
  );
}
