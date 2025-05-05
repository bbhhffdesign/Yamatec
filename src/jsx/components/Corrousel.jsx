// import { useRef, useEffect } from "preact/hooks";
import { useKeenSlider } from "keen-slider/react"; // funciona bien con Preact
import "keen-slider/keen-slider.min.css";

import img1 from "../../assets/img/hardwareImages/i9-squared.webp";
import img2 from "../../assets/img/hardwareImages/rtx1080-squared.webp";
import img3 from "../../assets/img/hardwareImages/rtx1650-squared.webp";

const images = [img1, img2, img3];

const Carousel = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((img, i) => (
        <div key={i} className="keen-slider__slide">
          <img src={img} alt={`slide-${i}`} style={{ width: "100%", borderRadius: "8px" }} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;