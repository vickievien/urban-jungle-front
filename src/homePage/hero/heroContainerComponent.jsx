import React, {useState, useEffect} from 'react';
import '../../css/App.css';
import '../../css/home.css';

const HeroContainerComponent = () => {
  
  const heroLinks = ["https://i.imgur.com/EXXgfmu.jpg", "https://i.imgur.com/WarlpaW.jpg", "https://i.imgur.com/DEQzfMD.jpg", "https://i.imgur.com/m13adLa.jpg"]
  

  let [index, setIndex] = useState(0);

  const numOfPics = heroLinks.length - 1;

  const nextSlide = () => {
    setIndex(index === numOfPics ? 0 : index + 1)
  }

  const previousSlide = () => {
    setIndex(index > 0 ? index - 1 : numOfPics)
  }
  
  return (
    <section className='hero-container'>
        <img className='hero-pic' src={heroLinks[index]} alt="hero plant image" />
        <h1 className='hero-title'>urban <br /> jungle</h1>
        <div className='arrow-container'>
          <i className="fas fa-angle-left hero-left-arrow" onClick={previousSlide}></i>
          <i className="fas fa-angle-right hero-right-arrow" onClick={nextSlide}></i>
        </div>
    </section>
  );
}

export default HeroContainerComponent;
