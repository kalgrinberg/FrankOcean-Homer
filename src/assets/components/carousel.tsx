import ProductCard from "./product-card";
import "./carousel.css";


function Carousel() {
    return (

        <div className="carouselContainer">
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>

    );
}


export default Carousel;