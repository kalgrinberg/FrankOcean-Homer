import ProductCard from "./product-card";
import "./carousel.css";
import Multicolor from "../images/SodiumBracelet_01_MultiColor.png";
import Clover from "../images/SodiumBracelet_GradientClover.png";
import Retba from "../images/SodiumBracelet_GradientRetbaPink.png";
import ChetBlue from "../images/SodiumBracelet_GradientChetBlue.png";

function Carousel() {
    return (

        <div className="carouselContainer">
            <ProductCard
                colorStyle={"Clover Gradient"}
                productImage={Clover}
            />
            <ProductCard 
                colorStyle={"Retba Pink"} 
                productImage={Retba}
            />
            <ProductCard 
                colorStyle={"Chet Blue Gradient"}
                productImage={ChetBlue}
            />
        </div>

    );
}


export default Carousel;