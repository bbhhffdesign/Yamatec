import { useEffect, useRef } from "preact/hooks";

const Marquee = () =>{
    const marqueeRef = useRef(null)
    const marqueeA = useRef(null);
    const marqueeB = useRef(null);
    // (1) creamos un objeto mutable useRef, el cual tiene una propiedad current que ahora es null.
    // marqueeRef == null. 


    useEffect(()=>{

        // (3) creamos la funcion del observador.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting){
                    marqueeA.current.style.willChange = "transform";
                    marqueeB.current.style.willChange = "transform";
                    marqueeA.current.style.animationPlayState = "running";
                    marqueeB.current.style.animationPlayState = "running";
                    console.log("entra");
                    
                }else{
                    marqueeA.current.style.animationPlayState = "paused";
                    marqueeB.current.style.animationPlayState = "paused";
                    marqueeA.current.style.willChange = "auto";
                    marqueeB.current.style.willChange = "auto";
                    console.log("sale");
                    
                }
            })
        });


        // (4) aca checkeamos que marqueeRef.current sea true, es decir si tiene algo, si no es null,
        // basicamente, si el componente ya se renderizo.
        // →Si se renderizo, entonces observalo. 
        if(marqueeRef.current){
            observer.observe(marqueeRef.current)
            console.log("Se ha comenzado de observar el Marquee")
        }
        
        // (5) Ahora tenemos que crear una funcion de limpieza que se ejecutara cuando el componente 
        // se desmonte o se vuelva a ejecutar el efecto [return] (en este caso no, porque pusimos el 
        // array vacio al final del efecto ↓↓ )
        
        return () =>{
            //si existe el elemento dejar de observar (PERO ANTES DE SALIR YA QUE ESTAMOS EN EL RETURN!)
            if(marqueeRef.current){
                observer.unobserve(marqueeRef.current);
                console.log("Se ha dejado de observar el Marquee")
            }
        }


    }, [])
    // el array vacio para que se ejecute el efecto solo cuando se carga el componente

    return(
        // (2) cuando este aside se renderiza Preact lo mete dentro de marqueeRef.current.
        // como si fuese useRef(<aside />).
        // es como hacer un getElementById pero dinamico, Preact espera que el componente se renderice 
        <aside id="marquee" ref={marqueeRef}>
            <div className="marquee">
                <div className="marquee__container" ref={marqueeA}>
                    <div className="marquee__item"></div>
                    <div className="marquee__item"></div>
                    <div className="marquee__item"></div>
                    <div className="marquee__item"></div>
                    <div className="marquee__item"></div>
                </div>
                <div className="marquee__container" ref={marqueeB}>
                    <div className="marquee__item"></div>
                    <div className="marquee__item"></div>
                    <div className="marquee__item"></div>
                    <div className="marquee__item"></div>
                    <div className="marquee__item"></div>
                </div>
            </div>
        </aside>
    )
}

export default Marquee;