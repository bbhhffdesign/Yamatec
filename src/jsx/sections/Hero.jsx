import { useRef, useEffect } from "preact/hooks";
import gsap from "gsap";
import NavBar from "../components/NavBar";
import BadgeTag from "../components/BadgeTag";
import GamerGuySgv from "../components/GamerGuySvg";
import Separator from "../components/Separator";

function Hero() {
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current.style.willChange = "transform, opacity";
    gsap.to(
      textRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        onComplete: () =>{
          textRef.current.style.willChange = "auto";
        }
      }
    );
  }, []);

  return (
    <section className="hero"> 
      <NavBar />
      <BadgeTag disableObserver={true} text={"Potenciamos tu PC de Trabajo o Gaming"} />

      <div className="hero__text" ref={textRef}>
        <h1 className="header-h1" >
          ¿Tu <strong>PC</strong> ya
          <br />
          no rinde al
          <br />
          <strong>Máximo</strong>?
        </h1>

        <p>
          Conectamos a <strong>Profesionales Digitales y Gamers</strong> con
          soluciones de hardware personalizadas
        </p>
      </div>

      <GamerGuySgv />
    </section>
  );
}

export default Hero;
