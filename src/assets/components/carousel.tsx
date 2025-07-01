import ProductCard from "./product-card";
import "./carousel.css";
import Clover from "../images/SodiumBracelet_GradientClover.png";
import Retba from "../images/SodiumBracelet_GradientRetbaPink.png";
import ChetBlue from "../images/SodiumBracelet_GradientChetBlue.png";
import BubbleBlue from "../images/SodiumBracelet_GradientBubbleBlue.png";
import Cadmium from "../images/SodiumBracelet_GradientCadmiumRed.png";
import Infrared from "../images/SodiumBracelet_GradientInfrared.png";

function Carousel() {
    return (
        <div className="carousel">
            <div className= "carouselTitle"> Sodium Bracelet </div>
            <div className="carouselContainer">
                <div className="carouselTrack">
                    <ProductCard
                        colorStyle={"Clover Gradient"} productImage={Clover} price={"$5,940.00"}
                        colorStripe={{background: "linear-gradient(to right, rgb(0, 175, 102), rgb(192, 218, 99)" }} />
                    <ProductCard
                        colorStyle={"Retba Pink"} productImage={Retba} price={"$5,940.00"}
                        colorStripe={{background: "linear-gradient(to right, rgb(0, 175, 102), rgb(244, 166, 215)" }} />
                    <ProductCard
                        colorStyle={"Chet Blue Gradient"} productImage={ChetBlue} price={"$5,940.00"}
                        colorStripe={{background: "linear-gradient(to right, rgb(48, 127, 226), rgb(192, 218, 99)" }} />             
                    <ProductCard
                        colorStyle={"Bubble Blue Gradient"} productImage={BubbleBlue} price={"$5,940.00"}
                        colorStripe={{background: "linear-gradient(to right, #59cbe8, #c0da63)" }} /> 
                    <ProductCard
                        colorStyle={"Cadmium Red Gradient"} productImage={Cadmium} price={"$5,940.00"}
                        colorStripe={{background: "linear-gradient(to right, #f9423a, #ff6720)" }} />
                    <ProductCard
                        colorStyle={"Infrared Gradient"} productImage={Infrared} price={"$5,940.00"}
                        colorStripe={{background: "linear-gradient(to right, #ff6720, #c0da63)" }} />
                </div>
            </div>
        </div>
    );
}
export default Carousel;