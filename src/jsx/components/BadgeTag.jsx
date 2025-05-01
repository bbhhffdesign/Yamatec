import { useEffect, useRef, useLayoutEffect } from "preact/hooks";
// import { gsap } from "gsap";
import { gsap } from "gsap/gsap-core";
import tick from "../../assets/img/tick.webp";
import corner from "../../assets/img/corner-1.webp";
import { useObserver } from "../hooks/useObserver";

const BadgeTag = ({ text, disableObserver = false }) => {
  const badgeRef = useRef(null);
  const contentRef = useRef(null);

  const { ref, hasEntered, isNear } = useObserver();

  // 🔁 Si está desactivado, asumimos que ya entró
  const finalHasEntered = disableObserver ? true : hasEntered;
  const finalIsNear = disableObserver ? true : isNear;

  // Estado inicial con layoutEffect
  useLayoutEffect(() => {
    if (finalIsNear && badgeRef.current && contentRef.current) {
      gsap.set(badgeRef.current, { x: -100, opacity: 0 });
      gsap.set(contentRef.current, { x: -100, opacity: 0 });
    }
  }, [finalIsNear]);

  // Animación al entrar
  useEffect(() => {
    if (!finalHasEntered) return;

    badgeRef.current.style.willChange = "transform, opacity";
    gsap.to(badgeRef.current, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        badgeRef.current.style.willChange = "auto";
      }
    });

    contentRef.current.style.willChange = "transform, opacity";
    gsap.to(contentRef.current, {
      x: "0%",
      opacity: 1,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
      onComplete: () => {
        contentRef.current.style.willChange = "auto";
      }
    });
  }, [finalHasEntered]);

  return (
    <div ref={disableObserver ? null : ref} className="badge">
      <aside className="tick" ref={badgeRef}>
        <img src={tick} alt="tick" height="24px" width="24px" />
      </aside>
      <div className="content-wrapper">
        <div className="content" ref={contentRef}>
          <small>{text}</small>
          <img className="corner" src={corner} alt="corner-box" height="32px" width="15px" />
        </div>
      </div>
    </div>
  );
};


export default BadgeTag;
