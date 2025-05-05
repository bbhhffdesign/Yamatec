// import { useKeenSlider } from "keen-slider/react";
import Carousel from "../components/Corrousel";
import BadgeTag from "../components/BadgeTag";
import Separator from "../components/Separator";

const Stock = () => {
  return (
    <section className="stock">
      <Separator className={"md"} style="background-color: black" />
      <div className="stock__gradient">
        <div className="text-background">
          <h1>YAMATEC</h1>
        </div>
        <div className="stock__text">
          <BadgeTag text={"     Oferta    "} />
          <h4 className={"txt-white"}> Algunos productos en</h4>
          <h1 className={"txt-white"} style={"text-shadow: -1px 1px orange"}>
            <i>S T O C K</i>
          </h1>
          {/* <Separator className={"sm"} /> */}
        </div>
        <Carousel />
        <div className="stock__card">
          <ul>
            <li><small>asdasdas</small></li>
            <li><small>asdasdas</small></li>
            <li><small>asdasdas</small></li>
          </ul>
          {/* <p className={"txt-white"}>card ñ</p>
            <p className={"txt-white"}>cardcardcard</p> */}
        </div>
      </div>
    </section>
  );
};

export default Stock;
