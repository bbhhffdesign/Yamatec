import { useEffect, useRef } from "preact/hooks";
import gsap from "gsap";
import logo from "../../assets/img/logos/logoYamatecHeader.webp";

function NavBar() {
  const headerRef = useRef(null);

  useEffect(() => {
    headerRef.current.style.willChange = "transform";
    gsap.fromTo(
      headerRef.current,
      { x: "-100%" },
      {
        x: 0,
        duration: 0.8,
        ease: "power1.out",
        delay: 1.2,
        onComplete: () => {
          headerRef.current.style.willChange = "auto";
        },
      }
    );
  }, []);

  return (
    <header className="nav" ref={headerRef}>
      <div className="nav__bar"></div>
      <img
        className="nav__logo"
        src={logo}
        alt="logo-header"
        height="304px"
        width="322px"
      />
    </header>
  );
}

export default NavBar;
