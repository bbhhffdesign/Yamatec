import { useObserver } from "../hooks/useObserver";
import { useRef, useEffect, useLayoutEffect } from "preact/hooks";
import { gsap } from "gsap/gsap-core";

const UsBox = ({ img, children }) => {
  const { ref, hasEntered, isNear } = useObserver();

  // Vamos a observar el <article>, y también animarlo
  useLayoutEffect(() => {
    if (isNear && ref.current) {
      gsap.set(ref.current, { x: -200, opacity: 0 });
    }
  }, [isNear]);

  useEffect(() => {
    if (!hasEntered) return;

    ref.current.style.willChange = "transform, opacity";
    gsap.to(ref.current, {
      x: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
      onComplete: () => {
        ref.current.style.willChange = "auto";
      }
    });
  }, [hasEntered]);

  return (
    <article className="us-box" ref={ref}>
      <div className="img-container us-box__img">
        <img src={img} alt="Nosotros-articulo" />
      </div>
      <div className="us-box__text">{children}</div>
    </article>
  );
};

export default UsBox;
