import BadgeTag from "../components/BadgeTag.jsx";
import Marquee from "../components/Marquee.jsx";
import UsBox from "../components/UsBox.jsx";
import Separator from "../components/Separator.jsx";

import usImg1 from "../../assets/img/HardwareSeleccionado.webp";
import usImg2 from "../../assets/img/CompraVenta.webp";
import usImg3 from "../../assets/img/MejoresCotizaciones.webp";
import usImg4 from "../../assets/img/AtencionPersonalizada.webp";



const boxesData = [
    {img: usImg1, text: (
        <p><strong>Hardware Seleccionado </strong>y reacondicionado</p>
    )},
    {img: usImg2, text: (
        <p>Compra, Venta y <strong>Consignación</strong></p>
    )},
    {img: usImg3, text: (
        <p>Mejores <strong>Cotizaciones</strong></p>
    )},
    {img: usImg4, text: (
        <p><strong>Atención </strong>Personalizada</p>
    )},
]

const Us = ()=>{

    return(
        <section className="us" >

            <Marquee />
            <Separator />
            <Separator />
            <BadgeTag text="Nosotros"/>
            <div className="us-text-container">
                <h3><strong>AUMENTÁ TU PRODUCTIVIDAD Y JUGABILIDAD</strong></h3>
                <h4><strong>Nuestra marca es nueva, Nosotros no.</strong></h4>
                <p>+10 años optimizando Estaciones de trabajo y Gaming</p>
            </div>
            <Separator />
            <div className="us-boxes-container">
                {
                    boxesData.map(({img, text}, index) =>(
                        <UsBox key={index} img={img}>
                            {text}
                        </UsBox>
                    ))
                }
            </div>
                {/* <LogoMarquee /> */}

            {/* <Marquee>
             <img src={marqueeImg1} alt="a" />
             <img src={marqueeImg2} alt="a" />
             <img src={marqueeImg3} alt="a" />
             <img src={marqueeImg4} alt="a" />
             <img src={marqueeImg5} alt="a" />
            </Marquee> */}
            

        </section>
    )
}

export default Us;